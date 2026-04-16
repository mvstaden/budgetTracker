import { Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardLayout from "../components/layouts/DashboardLayout";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Route>

      {/* Auth Route */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
