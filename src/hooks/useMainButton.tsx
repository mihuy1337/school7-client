import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { Colors } from "../config/colors";

interface UseMainButtonProps {
  text: string;
  onClick?: VoidFunction;
  color?: string;
  textColor?: string;
  progress?: boolean;
  disabled?: boolean;
}

export function useMainButton({
  text,
  onClick,
  color = Colors.accent,
  textColor = Colors.black.main,
  progress = false,
  disabled = false,
}: UseMainButtonProps) {
  const button = WebApp.MainButton;

  useEffect(() => {
    button.setParams({
      text,
      color,
      text_color: textColor,
      is_active: !disabled,
    });

    button.onClick(onClick ?? (() => {}));
    button.show();

    return () => {
      button.offClick(onClick ?? (() => {}));
    };
  }, [text, color, textColor, onClick, progress, disabled]);
}
