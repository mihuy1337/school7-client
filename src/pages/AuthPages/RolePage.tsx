import { useNavigate } from "react-router";
import { useBackButton } from "../../hooks/useBackButton";
import { useMainButton } from "../../hooks/useMainButton";
import { useSecondaryButton } from "../../hooks/useSecondaryButton";

export function RolePage() {
  const navigate = useNavigate()
  useBackButton()

  useMainButton({text: 'Ученик', onClick: () => navigate("/register/role/student")})
  useSecondaryButton({text: 'Учитель', onClick: () => navigate("/register/role/teacher")})

  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <div className="flex items-end space-x-12">
        <img className="h-auto max-w-full" src='/pic1.svg' />
        <img className="h-auto max-w-full" src='/pic2.svg' />
      </div>
      <h1 className="font-rubik text-2xl font-semibold text-center">
        <span className="text-accent">Отлично</span>! Теперь выбери кто ты.
      </h1>
    </div>
  )
}
