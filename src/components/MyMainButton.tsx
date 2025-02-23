import { MainButton } from "@twa-dev/sdk/react";
import { Colors } from "../config/colors";

interface Props {
  disabled?: boolean;
  progress?: boolean;
  color?: string;
  textColor?: string;
  onClick?: VoidFunction;
  text: string;
}

export function MyMainButton(
  { text, 
  textColor = Colors.black.main, 
  color = Colors.accent, 
  progress,
  onClick,
  disabled }: Props) {
  return (
    <MainButton 
      key={text}  // Добавляем ключ, основанный на тексте кнопки
      text={text} 
      textColor={textColor} 
      color={color} 
      progress={progress} 
      disabled={disabled} 
      onClick={onClick}
    />
  );
}
