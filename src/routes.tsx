import { Routes, Route } from "react-router";
import { HelloPage } from "./pages/HelloPage";
import { RolePage } from "./pages/RolePage";
import { RoleOkPage } from "./pages/RoleOkPage";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<HelloPage />} />
      <Route path="/register/role" element={<RolePage />} />
      <Route path="/register/role/:role" element={<RoleOkPage/>} />
    </Routes>
  );
}
