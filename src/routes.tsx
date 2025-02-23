import { Route, Routes } from "react-router";
import { HelloPage } from "./pages/HelloPage";
import { RolePage } from "./pages/RolePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HelloPage />}/>
      <Route path="/register/role" element={<RolePage/>}/>
    </Routes>
  )
}
