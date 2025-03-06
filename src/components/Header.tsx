import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function Header({children}: Props) {
  return (
    <header className="flex justify-center items-center min-h-safe-tg-top pt-safe-device-top">
      <div className="text-center w-full">
        <div>
          {children}
        </div>
      </div>
    </header>
  )
}
