import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function Header({children}: Props) {
  return (
    <header className="flex justify-center items-center min-h-safe-tg-top">
      <div className="text-center font-medium rounded-[8px] bg-black-secondary text-accent px-3 py-0.5 ">
        {children}
      </div>
    </header>
  )
}
