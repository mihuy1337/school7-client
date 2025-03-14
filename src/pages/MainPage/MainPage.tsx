import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useNavigate } from "react-router"
import { useSchedule } from "../../hooks/useSchedule"

export function MainPage() {
  const navigate = useNavigate()
  dayjs.extend(weekday)
  const today = dayjs().weekday()
  console.log(today)
  const scheduleToday = useSchedule({ queryKey: ['schedule', `${today}`], day: 1 });
  const scheduleTomorrow = useSchedule({ queryKey: ['schedule', `${today + 1}`], day: 1 + 1 });
  return (
    <>
      <Header>Главная</Header>

      {scheduleToday.isSuccess && scheduleTomorrow.isSuccess ? (
        <div>
          <h2>Расписание на сегодня</h2>
          <pre>{JSON.stringify(scheduleToday.data, null, 2)}</pre>

          <h2>Расписание на завтра</h2>
          <pre>{JSON.stringify(scheduleTomorrow.data, null, 2)}</pre>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}

      {/* <Page404 isPage={false}/> */}
      <MyMainButton 
        text="Дневник" 
        onClick={() => navigate("/404")}
      />
      <MySecondaryButton 
        text="Д/З"
        onClick={() => navigate("/404")}
      />
    </>
  )
}
