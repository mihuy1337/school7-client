import WebApp from "@twa-dev/sdk"
import { Header } from "../components/Header"
import { MyMainButton } from "../components/MyMainButton"
import { Popup } from "../components/Popup"
import { MySecondaryButton } from "../components/MySecondaryButton"
import { useShortcut } from "../hooks/useShorcut"
import { Page404 } from "../components/404"
import { useNavigate } from "react-router"

export function MainPage() {
  const navigate = useNavigate()
  const { isShortcut } = useShortcut()
  return (
    <>
      <Header>Главная</Header>
      <Page404 isPage={false}/>
      {!isShortcut && (
        <Popup>Для быстрого доступа <span className="text-accent">установи иконку</span> на рабочий стол.</Popup>
      )}
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
