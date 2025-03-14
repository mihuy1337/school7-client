import { useQuery } from "@tanstack/react-query"
import { scheduleService } from "../services/schedule.service"

interface IScheduleHook {
  queryKey: string[]
  day: number | string
}

export function useSchedule({queryKey, day}: IScheduleHook) {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey,
    queryFn: () => scheduleService.getScheduleDay(day),
    refetchInterval: 15 * 60 * 1000
  })
  return {data, isLoading, isSuccess}
}