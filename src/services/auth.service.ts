import { axiosClassic } from "../api/interceptors"
import { IAuthResponse, ILoginForm, IRegisterForm } from "../types/auth.types"
import { saveTokenStorage, removeFromStorage } from "./auth-token.service"


export const authService = {
	async register(data: IRegisterForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/register`,
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	async login(data: ILoginForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/login`,
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) removeFromStorage()

		return response
	}
}
