import pic1 from "../assets/pic1.svg"
import pic2 from "../assets/pic2.svg"
import { useBackButton } from "../hooks/useBackButton";
import { useMainButton } from "../hooks/useMainButton";
import { useSecondaryButton } from "../hooks/useSecondaryButton";

export function RolePage() {
  useBackButton()

  useMainButton({text: 'Ученик', })
  useSecondaryButton({text: 'Учитель'})

  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center bg-black-main">
      <div className="flex items-end space-x-12">
        <img className="h-auto max-w-full" src={pic1} />
        <img className="h-auto max-w-full" src={pic2} />
      </div>
      <h1 className="font-rubik text-2xl font-semibold text-center">
        <span className="text-accent">Отлично</span>! Теперь выбери кто ты.
      </h1>
    </div>
  )
}
