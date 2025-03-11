import WebApp from "@twa-dev/sdk"
import { Header } from "../components/Header"
import { MyMainButton } from "../components/MyMainButton"
import { Popup } from "../components/Popup"
import { MySecondaryButton } from "../components/MySecondaryButton"
import { useShortcut } from "../hooks/useShorcut"
import { Page404 } from "../components/404"
import { useNavigate } from "react-router"
import { saveToStorage } from "../services/storage.service"
import { Loading } from "../components/Loading"

export function MainPage() {
  const navigate = useNavigate();
  const { isShortcut } = useShortcut();

  if (isShortcut === null) return <Loading/>;

  return (
    <>
      <Header>Главная</Header>
      <Page404 isPage={false} />
      {isShortcut && (
        <Popup>
          Для быстрого доступа <span className="text-accent">установи иконку</span> на рабочий стол.
        </Popup>
      )}
      <MyMainButton
        text={isShortcut ? "Да, давай" : "Дневник"}
        onClick={isShortcut ? () => WebApp.addToHomeScreen() : () => navigate("/404")}
      />
      <MySecondaryButton
        text={isShortcut ? "Нет, не хочу" : "Д/З"}
        onClick={isShortcut ? () => saveToStorage("isMissed", "true") : () => navigate("/404")}
      />
    </>
  );
}
