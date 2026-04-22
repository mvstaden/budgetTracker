import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-xl bg-white p-8 flex flex-col gap-8 w-full rounded-xl">
      <h1 className="text-3xl">Login</h1>
      <LoginForm />
      <p className="text-center text-gray-500">
        Need to create an account?
        <Link
          to={"/register"}
          className="font-bold underline text-grey900 ml-2 cursor-pointer hover:text-gray-900/70">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
export default LoginPage;
