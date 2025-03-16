import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"
import { MySecondaryButton } from "../../components/MySecondaryButton"
import { useNavigate } from "react-router"
import { ScheduleSection } from "./sections/ScheduleSection"

export function MainPage() {
  const navigate = useNavigate()
  return (
    <>
      <Header>Главная</Header>
      <ScheduleSection/>
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
