import WebApp from "@twa-dev/sdk";
import picture from '../assets/pic3.svg';
import { useNavigate } from "react-router";
import { MyMainButton } from "../components/MyMainButton";
import { MySecondaryButton } from "../components/MySecondaryButton";

export function HelloPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <img className="max-h-2/4" src={picture}/>
      <h1 className="font-rubik text-2xl font-semibold text-center">
        Привет, <span className="text-accent">{WebApp.initDataUnsafe.user?.first_name}</span>. Ты зарегистрирован?
      </h1>
      <MyMainButton text="Да" />
      <MySecondaryButton text="Нет" onClick={() => navigate("/register/role")} />
    </div>
  )
}
