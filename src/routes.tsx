import { Routes, Route } from "react-router";
import { HelloPage } from "./pages/AuthPages/HelloPage";
import { RolePage } from "./pages/AuthPages/RolePage";
import { RoleOkPage } from "./pages/AuthPages/RoleOkPage";
import { RegistrationPage } from "./pages/AuthPages/RegistrationPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { IsAuth } from "./middleware/isAuth";
import { ActivatePage } from "./pages/AuthPages/ActivatePage";
import { Page404 } from "./components/404";
import { GradesPage } from "./pages/GradesPage/GradesPage";
import { FinalGradesPage } from "./pages/GradesPage/FinalGradesPage";


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
      <Route path="/404" element={<Page404 isPage={true}/>}/>
      <Route path="/grades" element={<GradesPage/>}/>
      <Route path="/grades/final" element={<FinalGradesPage/>}/>
    </Routes>
  );
}

