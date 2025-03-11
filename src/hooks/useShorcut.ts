import WebApp from "@twa-dev/sdk"
import { useState, useEffect } from "react";

interface IShortcut {
  isShortcut: boolean
}

export function useShortcut(): IShortcut {
  const [isShortcut, setIsShortcut] = useState<boolean>(false);

  useEffect(() => {
    WebApp.checkHomeScreenStatus((status) => {
      setIsShortcut(status === "added" || status === "unsupported");
    });
  }, []);

  return { isShortcut };
}