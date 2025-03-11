import { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { getItem } from "../services/storage.service";

interface IShortcut {
  isShortcut: boolean;
}

export function useShortcut(): IShortcut {
  const [isShortcut, setIsShortcut] = useState<boolean>(false);

  useEffect(() => {
    async function checkShortcut() {
      const isMissed = await getItem("isMissed");

      WebApp.checkHomeScreenStatus((status) => {
        setIsShortcut(status === "added" || status === "unsupported" || Boolean(isMissed));
      });
    }

    checkShortcut();
  }, []);

  return { isShortcut };
}
