import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useNavigate } from "react-router"
import { ScheduleSection } from "./sections/ScheduleSection"
import { LastGrades } from "./sections/LastGrades"

export function MainPage() {
  const navigate = useNavigate()
  return (
    <>
      <Header>Главная</Header>
      <div className="mt-safe-tg-top">
        <LastGrades/>
        <ScheduleSection/>
      </div>
      <MyMainButton 
        text="Оценки" 
        onClick={() => navigate("/404")}
      />
      <MySecondaryButton 
        text="Дневник"
        onClick={() => navigate("/404")}
      />
    </>
  )
}
