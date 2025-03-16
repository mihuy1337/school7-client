import WebApp from "@twa-dev/sdk"
import { ReactNode, useEffect, useRef } from "react"

interface Props {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  const platform = WebApp.platform === "android" || WebApp.platform === "android_x" || WebApp.platform === "ios";
  if (!platform) return null;

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.clientHeight;
      const minHeaderHeight = WebApp.contentSafeAreaInset.top; // Минимальная высота хэдера (например, 64px)
      const padding = 1 + (minHeaderHeight - divHeight);

      // Записываем в переменную CSS
      document.documentElement.style.setProperty("--spacing-header-padding", `${padding}px`);
    }
  }, [children]);
  return (
    <>
      <div className="h-safe-device-top absolute z-50 bg-3-main"></div>
      <header className="sticky w-full flex justify-center items-center min-h-safe-tg-top z-40 bg-transparent"
        style={{
          marginTop: "var(--spacing-header-padding)",
        }}>
        <div ref={divRef} className="text-center font-medium rounded-[8px] bg-black-secondary text-accent px-3 py-0.5">
          {children}
        </div>
      </header>
    </>
  );
};

// export function Header({ children }: Props) {
//   const platform = WebApp.platform === "android" || WebApp.platform === "android_x" || WebApp.platform === "ios";

//   if (!platform) return null;

//   return (
//     <header className="sticky top-safe-device-top w-full flex flex-col justify-center items-center min-h-safe-tg-top h-safe-tg-top z-50 bg-transparent">
//       <div className="text-center h-full flex items-center justify-center font-medium rounded-[8px] bg-black-secondary text-accent">
//        {children}
//       </div>
//     </header>

//   );
// }
