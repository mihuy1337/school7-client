import { MainButton } from "@twa-dev/sdk/react";
import { Colors } from "../config/colors";
import { useForceUpdate } from "../hooks/useForceUpdate";

interface Props {
  disabled?: boolean;
  progress?: boolean;
  color?: string;
  textColor?: string;
  onClick?: VoidFunction;
  text: string;
}

export function MyMainButton(
  {text, 
  textColor = Colors.black.main, 
  color = Colors.accent, 
  progress,
  onClick,
  disabled}: Props) {
  
  const forceUpdate = useForceUpdate();

  return (
    <MainButton 
      text={text} 
      textColor={textColor} 
      color={color} 
      progress={progress} 
      disabled={disabled} 
      onClick={() => {
        onClick?.();
        forceUpdate(); // Принудительный ререндеринг
      }}
    />
  );
}
