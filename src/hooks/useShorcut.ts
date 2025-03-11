import { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { getItem } from "../services/storage.service";

interface IShortcut {
  isShortcut: boolean;
}

export function useShortcut(): IShortcut {
  const [isShortcut, setIsShortcut] = useState<boolean | null>(null);
  const [isMissed, setIsMissed] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMissed() {
      const missed = await getItem("isMissed");
      setIsMissed(missed);
    }
    fetchMissed();
  }, []);

  useEffect(() => {
    if (isMissed === null) return;

    WebApp.checkHomeScreenStatus((status) => {
      setIsShortcut(status === "added" || status === "unsupported" || Boolean(isMissed));
    });
  }, [isMissed]);

  return { isShortcut: isShortcut ?? false };
}


