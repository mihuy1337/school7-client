import { axiosClassic } from "../api/interceptors"
import { IAuthResponse, ILoginForm, IRegisterForm } from "../types/auth.types"
import { saveToStorage, removeFromStorage, EnumTokens } from "./storage.service"


export const authService = {
	async register(data: IRegisterForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/register`,
			data
		)

		if (response.data.accessToken) saveToStorage(EnumTokens.ACCESS_TOKEN, response.data.accessToken)
		if (response.data.refreshToken) saveToStorage(EnumTokens.REFRESH_TOKEN, response.data.accessToken)

		return response
	},

	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/login`,
			data
		)

		if (response.data.accessToken) saveToStorage(EnumTokens.ACCESS_TOKEN, response.data.accessToken)
		if (response.data.refreshToken) saveToStorage(EnumTokens.REFRESH_TOKEN, response.data.accessToken)

		return response
	},

	async getNewTokens(data: {refreshToken: string}) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/access-token',
			data,
    	{ withCredentials: true }
		)
		

		if (response.data.accessToken) saveToStorage(EnumTokens.ACCESS_TOKEN, response.data.accessToken)
		if (response.data.refreshToken) saveToStorage(EnumTokens.REFRESH_TOKEN, response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) removeFromStorage(EnumTokens.ACCESS_TOKEN)
		if (response.data) removeFromStorage(EnumTokens.REFRESH_TOKEN)

		return response
	}
}
