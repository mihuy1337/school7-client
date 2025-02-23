import { SecondaryButton } from "@twa-dev/sdk/react";
import { Colors } from "../config/colors";
import { useForceUpdate } from "../hooks/useForceUpdate";

interface Props {
  disabled?: boolean;
  progress?: boolean;
  color?: string;
  textColor?: string;
  onClick?: VoidFunction;
  text: string;
  position?: "left" | "top" | "bottom" | "right" | undefined;
}

export function MySecondaryButton(
  {text, 
  textColor = Colors.accent, 
  color = Colors.black.secondary, 
  progress,
  onClick,
  disabled,
  position = "left"}: Props) {

  const forceUpdate = useForceUpdate();

  return (
    <SecondaryButton 
      text={text} 
      textColor={textColor} 
      color={color} 
      progress={progress} 
      disabled={disabled} 
      onClick={() => {
        onClick?.();
        forceUpdate(); // Принудительный ререндеринг
      }} 
      position={position}
    />
  );
}
