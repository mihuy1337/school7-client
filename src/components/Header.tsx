import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function Header({children}: Props) {
  return (
    <header className="flex justify-center items-center min-h-safe-tg-top">
      <div className="text-center font-medium rounded-[7px] bg-accent text-black-main px-2 pt-0.5 ">
        <div className="">
          {children}
        </div>
      </div>
    </header>
  )
}
