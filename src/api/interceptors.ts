import axios, { type CreateAxiosDefaults } from 'axios'
import { EnumTokens, getItem, removeFromStorage } from '../services/storage.service'
import { errorCatch } from './error'
import { authService } from '../services/auth.service'

const options: CreateAxiosDefaults = {
  baseURL: 'https://gq1w8wd4-3100.inc1.devtunnels.ms',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(async config => {
  const accessToken = await getItem(EnumTokens.ACCESS_TOKEN)

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        const refreshToken = await getItem(EnumTokens.REFRESH_TOKEN)

        if (refreshToken === null) return;

        await authService.getNewTokens({ refreshToken })
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeFromStorage(EnumTokens.REFRESH_TOKEN)
      }
    }

    throw error
  }
)

export { axiosClassic, axiosWithAuth }

