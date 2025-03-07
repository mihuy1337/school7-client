import WebApp from "@twa-dev/sdk"
import { Header } from "../../components/Header"
import { MyMainButton } from "../../components/MyMainButton"

export function ActivatePage() {
  return (
    <div className="h-screen flex flex-col bg-black-main">
      <Header>Жди.</Header>
      <div className="flex flex-col flex-1 justify-center items-center space-y-8">
        <img className="h-auto max-w-full" src='/pic5.svg' alt="Role illustration" />
        <h1 className="font-rubik text-2xl font-semibold text-center">
          Теперь <span className="text-accent">чуть</span>-<span className="text-accent">чуть</span> подожди пока <span className="text-accent">одобрят</span> твою регистрацию.
        </h1>
        <MyMainButton text="Закрыть" onClick={() => WebApp.close()} />
      </div>
    </div>
  )
}
