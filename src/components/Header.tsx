import WebApp from "@twa-dev/sdk"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function Header({ children }: Props) {
  const platform = WebApp.platform === "android" || WebApp.platform === "android_x" || WebApp.platform === "ios";

  if (!platform) return null;

  return (
    <header className="flex justify-center items-center min-h-safe-tg-top">
      <div className="text-center font-medium rounded-[8px] bg-black-secondary text-accent px-3 py-0.5">
        {children}
      </div>
    </header>
  );
}
