import WebApp from "@twa-dev/sdk"
import { Header } from "../components/Header"
import { MyMainButton } from "../components/MyMainButton"
import { Popup } from "../components/Popup"
import { MySecondaryButton } from "../components/MySecondaryButton"
import { useShortcut } from "../hooks/useShorcut"
import { Page404 } from "../components/404"

export function MainPage() {
  const { isShortcut } = useShortcut()
  return (
    <>
      <Header>Главная</Header>
      <Page404/>
      {!isShortcut && (
        <Popup>Для быстрого доступа <span className="text-accent">установи иконку</span> на рабочий стол.</Popup>
      )}
      <MyMainButton text="Да, давай" onClick={() => WebApp.addToHomeScreen()}/>
      <MySecondaryButton text="Нет, не хочу"/>
    </>
  )
}
