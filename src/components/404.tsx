import { useNavigate } from "react-router";
import { Header } from "./Header";
import { MyMainButton } from "./MyMainButton";

interface Props { 
  isPage: boolean
}

export function Page404({isPage}: Props) {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col bg-black-main">
      {isPage && <Header>В разработке...</Header>}
      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <img className="h-auto max-w-full" src='/pic5.svg' />
        <h1 className="h2 text-center">
          <span className="text-accent">Упс</span>! Кажется ведется <span className="text-accent">разработка</span>...
        </h1>
        <MyMainButton text="Назад" onClick={() => navigate(-1)} />
      </div>
    </div>
  )
}
