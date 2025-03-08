import WebApp from "@twa-dev/sdk"
import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"
// import { EnumTokens, removeFromStorage } from "../../services/auth-token.service"

export function ActivatePage() {
  return (
    <div className="h-screen flex flex-col bg-black-main">
      <Header>Жди.</Header>
      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <img className="h-auto max-w-full" src='/pic2.svg' alt="Role illustration" />
        <h1 className="font-rubik text-2xl font-semibold text-center">
         <span className="text-accent">Чуть</span>-<span className="text-accent">чуть</span> подожди пока <span className="text-accent">одобрят</span> твою регистрацию.
        </h1>
        <MyMainButton text="Закрыть" onClick={async () => {
          // await removeFromStorage(EnumTokens.ACCESS_TOKEN);
          // await removeFromStorage(EnumTokens.REFRESH_TOKEN)
          WebApp.close();
        }} 
          />
      </div>
    </div>
  )
}
