import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import { HelloPage } from "./pages/HelloPage";
import { RolePage } from "./pages/RolePage";

export function AppRoutes() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
    console.log("Принудительный ререндеринг страницы:", location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HelloPage key={key} />} />
      <Route path="/register/role" element={<RolePage key={key} />} />
    </Routes>
  );
}
