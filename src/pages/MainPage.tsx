import { Header } from "../components/Header"
import { MyMainButton } from "../components/MyMainButton"
import { MySecondaryButton } from "../components/MySecondaryButton"
import { Page404 } from "../components/404"
import { useNavigate } from "react-router"

export function MainPage() {
  const navigate = useNavigate()
  return (
    <>
      <Header>Главная</Header>
      <Page404 isPage={false}/>
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
