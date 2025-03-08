import { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router";
import { checkAuthService } from "../services/checkAuth.service";
import { Loading } from "../components/Loading";

export function IsAuth({ children }: { children: ReactNode }) {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkRefresh = async () => {
      try {
        const isRefresh = await checkAuthService.checkRefresh();

        if (!isRefresh) {
          navigate("/hello");
          return;
        }

        const isActivated = await checkAuthService.checkActivate();

        console.log(isActivated)
        if (!isActivated) {
          console.log('Блок активации')
          navigate("/activate");
          return;
        }

        if (isActivated && isRefresh) {
          navigate("/");
          return;
        }
      } catch (error) {
        console.error("Ошибка проверки refresh-токена:", error);
        navigate("/hello");
      } finally {
        setIsChecking(false);
      }
    };

    checkRefresh();
  }, [navigate]);

  if (isChecking) {
    return <Loading />;
  }

  return <>{children}</>;
}
