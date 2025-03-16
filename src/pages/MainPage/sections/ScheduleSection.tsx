import { Table } from "../../../components/Table";
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import { useSchedule } from "../../../hooks/useSchedule";

export function ScheduleSection() {
  dayjs.extend(weekday)
  const today = dayjs().weekday()
  console.log(today)
  const scheduleToday = useSchedule({ queryKey: ['schedule', `${today}`], day: 1 });
  const scheduleTomorrow = useSchedule({ queryKey: ['schedule', `${today + 1}`], day: 1 + 1 });
  
  return (
    <div>
      <h1>Расписание</h1>
      {scheduleToday?.data === undefined ? (
        <p>Упс, здесь ничего нет...</p>
      ) : (
        <Table H1="Сегодня" data={scheduleToday?.data}/>
      )}
      {scheduleTomorrow?.data === undefined ? (
        <p>Упс, здесь ничего нет...</p>
      ) : (
        <Table H1="Сегодня" data={scheduleTomorrow?.data}/>
      )}
    </div>
  )
}
