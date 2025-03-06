import { useNavigate } from "react-router";
import { useBackButton } from "../../hooks/useBackButton";
import { MyMainButton } from "../../components/MyMainButton";
import { MySecondaryButton } from "../../components/MySecondaryButton";
import { Header } from "../../components/Header";

export function RolePage() {
  const navigate = useNavigate()
  useBackButton()

  return (
    <div>
      <Header>Роль</Header>
      <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
        <div className="flex items-end space-x-12">
          <img className="h-auto max-w-full" src='/pic1.svg' />
          <img className="h-auto max-w-full" src='/pic2.svg' />
        </div>
        <h1 className="font-rubik text-2xl font-semibold text-center">
          <span className="text-accent">Отлично</span>! Теперь выбери кто ты.
        </h1>
          <MyMainButton text="Ученик" onClick={() => navigate("/register/role/student")}/>
          <MySecondaryButton text="Учитель" onClick={() => navigate("/register/role/teacher")}/>
      </div>
    </div>
  )
}
