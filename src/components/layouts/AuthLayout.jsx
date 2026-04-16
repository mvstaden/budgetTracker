import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen lg:flex-row flex flex-col">
      {/* Image and top banner */}
      <div className="bg-grey900 py-6 px-10 lg:p-5"></div>

      {/* Formside */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
