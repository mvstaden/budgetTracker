import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};
export default ProtectedRoutes;
