import { axiosClassic, axiosWithAuth } from "../api/interceptors"
import { EnumTokens, getItem } from "./storage.service"

interface isRefresh {
  isValid: boolean
}

interface isAcivate {
  isActivated: boolean
}

export const checkAuthService = {
  async checkRefresh() {
    const refreshToken = await getItem(EnumTokens.REFRESH_TOKEN)
    const res = await axiosClassic.post<isRefresh>('/auth/check-refresh',
      {refreshToken: refreshToken}
    )
    return res.data.isValid
  },

  async checkActivate() {
    const res = await axiosWithAuth.get<isAcivate>('/auth/check-activate')
    console.log(res)
    return res.data.isActivated
  }
}