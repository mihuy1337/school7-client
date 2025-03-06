import { Colors } from "../config/colors";
import { Header } from "./Header";
import { MyMainButton } from "./MyMainButton";

export function Loading() {
  return (
    <div>
      <Header>Загрузка</Header>
      <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
        <img className="h-auto max-w-full" src='/pic4.svg'/>
        <h1 className="font-rubik text-2xl font-semibold text-center">
          <span className="text-accent">Подожди</span>! Идет загрузка...
        </h1>
        <MyMainButton progress={true} text="Идет загрузка..." disabled={true} color={Colors.black.secondary} textColor={Colors.accent}/>
      </div>
    </div>
  )
}
