import { SecondaryButton } from "@twa-dev/sdk/react";
import { Colors } from "../config/colors";

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
  { text, 
  textColor = Colors.accent, 
  color = Colors.black.secondary, 
  progress,
  onClick,
  disabled,
  position = "left" }: Props) {
  return (
    <SecondaryButton 
      key={text}  // Добавляем ключ, основанный на тексте кнопки
      text={text} 
      textColor={textColor} 
      color={color} 
      progress={progress} 
      disabled={disabled} 
      onClick={onClick} 
      position={position}
    />
  );
}
