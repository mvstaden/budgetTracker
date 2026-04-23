import { Outlet } from "react-router-dom";
import loginImage from "../../assets/images/loginImg.svg";

const AuthLayout = () => {
  return (
    <div className="min-h-screen lg:flex-row  flex flex-col  bg-beige100">
      {/* Image and top banner */}
      <div className="bg-grey900 lg:bg-beige100 lg:max-h-full py-6 px-10 lg:p-5">
        <div className="hidden lg:block">
          <img
            src={loginImage}
            alt=""
            className=" lg:max-w-150 h-full rounded-xl"
          />
        </div>
        <h2 className="lg:hidden text-center">Finance</h2>
      </div>

      {/* Formside */}
      <div className="flex items-center justify-center w-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
