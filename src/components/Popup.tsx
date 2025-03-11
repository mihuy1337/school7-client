import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export function Popup({children}: Props) {
  return (
    <div className="max-w-screen fixed inset-0 backdrop-blur-xs flex items-center justify-center bg-black-main/30">
      <div className="w-[80vw] max-w-[500px] mt-safe-bottom p-4 bg-black-secondary rounded-xl flex flex-col justify-center items-center space-y-8">
        <img src="/pic1.svg" />
        <p className="text-center font-medium">
          {children}
        </p>
      </div>
    </div>
  )
}
