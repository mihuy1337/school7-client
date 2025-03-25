import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useNavigate } from "react-router"
import { ScheduleSection } from "./sections/ScheduleSection"
// import { LastGrades } from "./sections/LastGrades"
import { StatisticsSection } from "./sections/StatisticsSection"
import { useGrades } from "../../hooks/useGrades"
import { Loading } from "../../components/Loading"

export function MainPage() {
  const navigate = useNavigate()
  const { statistics, isLoading } = useGrades()
  return (
    <>
      {!isLoading ? (
        <>
          <Header>Главная</Header>
          <div className="mt-safe-tg-top space-y-4">
            <StatisticsSection statistics={statistics}/>
            {/* <LastGrades newGroupedGrades={latestGroupedGrades}/> */}
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
