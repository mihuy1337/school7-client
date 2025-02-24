import { useParams } from "react-router";
import pic2 from "../assets/pic2.svg"
import pic1 from "../assets/pic1.svg"
import { useBackButton } from "../hooks/useBackButton"
import { useMainButton } from "../hooks/useMainButton";

export function RoleOkPage() {
  const { role } = useParams();

  useMainButton({text: 'Продолжить'})

  useBackButton()
  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <img className="h-auto max-w-full" src={role === 'teacher' ? pic1 : pic2}/>
      <h1 className="font-rubik text-2xl font-semibold text-center">
        <span className="text-accent">Хорошо</span>. Теперь заполни свой профиль.
      </h1>
    </div>
  )
}
