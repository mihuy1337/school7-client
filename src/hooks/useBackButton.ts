import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router";

interface Props {
  onClick?: VoidFunction;
}

export function useBackButton({ onClick }: Props = {}) {
  const navigate = useNavigate();
  const button = WebApp.BackButton;

  const handleClick = onClick ?? (() => navigate(-1));

  useEffect(() => {
    button.show();
    button.onClick(handleClick);

    return () => {
      button.offClick(handleClick);
      button.hide();
    };
  }, [handleClick]);
}
