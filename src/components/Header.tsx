import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function Header({children}: Props) {
  return (
    <header className="flex justify-center items-center min-h-[--tg-content-safe-area-inset-top]">
      <div className="text-center w-full">
        <div>
          {children}
        </div>
      </div>
    </header>
  )
}
