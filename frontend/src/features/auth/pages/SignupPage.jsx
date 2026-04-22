import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

const SignupPage = () => {
  return (
    <div className="max-w-xl bg-white p-8 flex flex-col gap-8 w-full rounded-xl">
      <h1 className="text-3xl">Sign up</h1>
      <SignUpForm />
      <p className="text-center text-gray-500">
        Already have an account?
        <Link
          to={"/login"}
          className="font-bold underline text-grey900 ml-2 cursor-pointer hover:text-gray-900/70">
          Login
        </Link>
      </p>
    </div>
  );
};
export default SignupPage;
