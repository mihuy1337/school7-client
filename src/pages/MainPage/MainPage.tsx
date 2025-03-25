import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useNavigate } from "react-router"
import { ScheduleSection } from "./sections/ScheduleSection"
// import { LastGrades } from "./sections/LastGrades"
import { StatisticsSection } from "./sections/StatisticsSection"
import { useGrades } from "../../hooks/useGrades"
import { Loading } from "../../components/Loading"
import { LastGrades } from "./sections/LastGrades"

export function MainPage() {
  const navigate = useNavigate()
  const {newGrades, statistics, isLoading } = useGrades()
  return (
    <>
      {!isLoading ? (
        <>
          <Header>Главная</Header>
          <div className="mt-safe-tg-top space-y-4">
            <StatisticsSection statistics={statistics}/>
            <LastGrades newGrades={newGrades}/>
            <ScheduleSection/>
          </div>
          <MyMainButton 
            text="Оценки" 
            onClick={() => navigate("/grades")}
          />
          <MySecondaryButton 
            text="Дневник"
            onClick={() => navigate("/404")}
          />
        </>
      ) : (
        <Loading/>
      )}
    </>
  )
}
