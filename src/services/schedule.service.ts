import { axiosWithAuth } from "../api/interceptors"
import { ISchedule } from "../types/schedule.types"

class ScheduleService {
	private BASE_URL = '/schedule'

	async getScheduleDay(day: number) {
		const response = await axiosWithAuth.get<ISchedule>(`${this.BASE_URL}/${day}`)
		return response.data
	}
}

export const scheduleService = new ScheduleService()