import WebApp from "@twa-dev/sdk";
import picture from '../../assets/pic3.svg';
import { useNavigate } from "react-router";
import { useMainButton } from "../../hooks/useMainButton";
import { useSecondaryButton } from "../../hooks/useSecondaryButton";

export function HelloPage() {
  const navigate = useNavigate()

  useMainButton({text: 'Да', onClick: () => navigate("/login")})
  useSecondaryButton({text: 'Нет', onClick: () => navigate("/register/role")})

  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <img className="h-auto max-w-full" src={picture}/>
      <h1 className="font-rubik text-2xl font-semibold text-center">
        Привет, <span className="text-accent">{WebApp.initDataUnsafe.user?.first_name}</span>. Ты зарегистрирован(а)?
      </h1>
    </div>
  )
}
