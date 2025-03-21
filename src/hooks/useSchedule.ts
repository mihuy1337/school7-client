import { useQuery } from "@tanstack/react-query"
import { scheduleService } from "../services/schedule.service"
import { RowProps } from "../components/Table"
import { ISchedule } from "../types/schedule.types"

interface IScheduleHook {
  queryKey: string[]
  day: number | string
}

export function useSchedule({ queryKey, day }: IScheduleHook) {
  if (Number(day) === 6 || Number(day) === 7) day = 1
  const { data, isLoading, isSuccess } = useQuery<ISchedule>({
    queryKey,
    queryFn: () => scheduleService.getScheduleDay(day),
    refetchInterval: 15 * 60 * 1000,
  })

  if (data === undefined) return
  const className = Object.keys(data)[0]

  let transformedData: RowProps[] = []

  if (isSuccess && data?.[className]?.[String(day)]) {
    transformedData = data[className][String(day)].map((lesson) => ({
      number: lesson.number,
      name: lesson.subject,
      desc: lesson.classroom === null ? lesson.time : `каб. ${lesson.classroom}, ${lesson.time}`,
    }))
  }

  return { data: transformedData, isLoading, isSuccess }
}