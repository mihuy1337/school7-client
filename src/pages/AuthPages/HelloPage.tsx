import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router";
import { MyMainButton } from "../../components/MyMainButton";
import { MySecondaryButton } from "../../components/MySecondaryButton";
import { Header } from "../../components/Header";

export function HelloPage() {
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col bg-black-main">
      <Header>Привет!</Header>
      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <img className="h-auto max-w-full" src='/pic3.svg' />
        <h1 className="h2 text-center">
          Привет, <span className="text-accent">{WebApp.initDataUnsafe.user?.first_name}</span>. Ты зарегистрирован(а)?
        </h1>
        <MyMainButton text="Да" onClick={() => navigate("/login")} />
        <MySecondaryButton text="Нет" onClick={() => navigate("/register/role")} />
      </div>
    </div>
  )
}
