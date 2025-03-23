import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface Props {
  children: ReactNode
  className?: string
}

export function Badge({children, className}: Props) {
  return (
    <div className={twMerge(" bg-black-secondary px-2 py-0.5 font-medium text-[10px] rounded-md backdrop-blur-sm", className)}>
      {children}
    </div>
  )
}
