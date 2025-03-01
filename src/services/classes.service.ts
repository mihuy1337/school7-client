import { axiosClassic } from "../api/interceptors"
import { IClasses } from "../types/classes.types"

class ClassService {
	private BASE_URL = '/user/profile'

	async getClasses() {
		const response = await axiosClassic.get<IClasses[]>(this.BASE_URL)
		return response.data
	}
}

export const classService = new ClassService()