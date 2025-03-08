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

        const isActivate = await checkAuthService.checkActivate();

        if (!isActivate) {
          navigate("/activate");
          return;
        }

        if (isActivate && isRefresh) {
          navigate("/");
          return;
        }
      } catch (error) {
        console.error("Ошибка проверки refresh-токена:", error);
        navigate("/login");
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
