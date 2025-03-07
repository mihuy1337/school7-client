import { Routes, Route } from "react-router";
import { HelloPage } from "./pages/AuthPages/HelloPage";
import { RolePage } from "./pages/AuthPages/RolePage";
import { RoleOkPage } from "./pages/AuthPages/RoleOkPage";
import { RegistrationPage } from "./pages/AuthPages/RegistrationPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { IsAuth } from "./middleware/isAuth";
import { ActivatePage } from "./pages/AuthPages/ActivatePage";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IsAuth><MainPage /></IsAuth>} />
      <Route path="/hello" element={<HelloPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register/role" element={<RolePage />} />
      <Route path="/register/role/:role" element={<RoleOkPage />} />
      <Route path="/activate" element={<ActivatePage/>}/>
    </Routes>
  );
}
