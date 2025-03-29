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
      const padding = (minHeaderHeight - divHeight)/2;

      // Записываем в переменную CSS
      document.documentElement.style.setProperty("--spacing-header-padding", `${padding}px`);
      document.documentElement.style.setProperty("--header-div-height", `${divHeight}px`);
    }
  }, [children]);
  return (
    <>
      <div className="h-safe-device-top z-9999 fixed w-screen bg-black-main"></div>
      <header className="sticky z-9999 bg-transparent top-safe-device-top w-full flex justify-center items-center min-h-safe-tg-top"
        style={{
          paddingTop: "var(--spacing-header-padding)",
          paddingBottom: "var(--spacing-header-padding)"
        }}>
        {WebApp.initDataUnsafe.user?.photo_url && (
          <img className="h-[var(--header-div-height)] rounded-[8px] mr-2" src={WebApp.initDataUnsafe.user?.photo_url}/>
        )}
        <div ref={divRef} className="text-center font-medium rounded-[8px]  border-accent/40 backdrop-blur-sm bg-accent/10 text-accent px-3 py-0.5">
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
