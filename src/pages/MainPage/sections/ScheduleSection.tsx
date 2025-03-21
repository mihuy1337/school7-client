import { Table } from "../../../components/Table";
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import { useSchedule } from "../../../hooks/useSchedule";

export function ScheduleSection() {
  dayjs.extend(weekday)
  const today = dayjs().weekday()
  let day = dayjs().weekday()
  if (Number(day) === 6 || Number(day) === 7) day = 1
  const scheduleToday = useSchedule({ queryKey: ['schedule', `${day}`], day: day });
  const scheduleTomorrow = useSchedule({ queryKey: ['schedule', `${day + 1}`], day: day + 1 });
  
  return (
    <div>
      <h1 className="h1">Расписание</h1>
      {scheduleToday?.data === undefined ? (
        <p>Упс, здесь ничего нет...</p>
      ) : (
        <Table H1={today === day ? 'Сегодня' : dayjs().weekday(day).format('dddd, D MMMM')} data={scheduleToday?.data}/>
      )}
      {scheduleTomorrow?.data === undefined ? (
        <p>Упс, здесь ничего нет...</p>
      ) : (
        <Table H1={today === day ? 'Завтра' : dayjs().weekday(day + 1).format('dddd, D MMMM')} data={scheduleTomorrow?.data}/>
      )}
    </div>
  )
}
