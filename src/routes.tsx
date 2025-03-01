import { Routes, Route } from "react-router";
import { HelloPage } from "./pages/AuthPages/HelloPage";
import { RolePage } from "./pages/AuthPages/RolePage";
import { RoleOkPage } from "./pages/AuthPages/RoleOkPage";
import { RegistrationPage } from "./pages/AuthPages/RegistrationPage";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<HelloPage />} />
      <Route path="/register/role" element={<RolePage />} />
      <Route path="/register/role/:role" element={<RoleOkPage/>} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}
