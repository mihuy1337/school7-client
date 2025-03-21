import { axiosWithAuth } from "../api/interceptors"
import { ReportGrades } from "../types/grades.types"

class GradesService {
	private BASE_URL = '/grades'

	async getGrades() {
		const response = await axiosWithAuth.get<ReportGrades>(this.BASE_URL)
		return response.data
	}
}

export const gradesService = new GradesService()