import { Colors } from "../config/colors";
import { Header } from "./Header";
import { MyMainButton } from "./MyMainButton";

export function Loading() {
  return (
    <div className="h-screen flex flex-col bg-black-main">
      <Header>Загрузка</Header>
      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <img className="h-auto max-w-full" src='/pic4.svg'/>
        <h1 className="h2 text-center">
          <span className="text-accent">Подожди</span>! Идет загрузка...
        </h1>
        <MyMainButton progress={true} text="Идет загрузка..." disabled={true} color={Colors.black.secondary} textColor={Colors.accent}/>
      </div>
    </div>
  )
}
