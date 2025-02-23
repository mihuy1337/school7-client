import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { Colors } from "../config/colors";

interface UseSecondaryButtonProps {
  text: string;
  onClick?: VoidFunction;
  color?: string;
  textColor?: string;
  progress?: boolean;
  disabled?: boolean;
  position?: "left" | "top" | "bottom" | "right" | undefined;
}

export function useSecondaryButton({
  text,
  onClick,
  textColor = Colors.accent, 
  color = Colors.black.secondary, 
  progress = false,
  disabled = false,
  position = "left",
}: UseSecondaryButtonProps) {
  const button = WebApp.SecondaryButton;

  useEffect(() => {
    button.setParams({
      text,
      color,
      text_color: textColor,
      is_active: !disabled,
      position,
    });

    button.onClick(onClick ?? (() => {}));
    button.show();

    return () => {
      button.offClick(onClick ?? (() => {}));
      button.hide();
    };
  }, [text, color, textColor, onClick, progress, disabled, position]);
}
