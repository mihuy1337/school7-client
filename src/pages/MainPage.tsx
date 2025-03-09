import WebApp from "@twa-dev/sdk"
import { Header } from "../components/Header"
import { MyMainButton } from "../components/MyMainButton"
import { Popup } from "../components/Popup"
import { MySecondaryButton } from "../components/MySecondaryButton"

export function MainPage() {
  return (
    <>
      <Header>Главная</Header>
      <div className="">Жди докс</div>
      <Popup>Для быстрого доступа установи иконку на рабочий стол.</Popup>
      <MyMainButton text="Да, давай" onClick={() => WebApp.addToHomeScreen()}/>
      <MySecondaryButton text="Нет, не хочу"/>
    </>
  )
}
