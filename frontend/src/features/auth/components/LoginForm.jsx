import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        label={"Email"}
        placeholder={"Enter your email"}
        inputType={"text"}
        name={"email"}
      />
      <Input
        label={"password"}
        placeholder={"Enter your password"}
        inputType={"password"}
        name={"password"}
      />
      {/* <div className="flex flex-col gap-1 mb-8 ">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter your email"
          className="border border-beige500 rounded-lg px-5 py-3"
        />
      </div> */}
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;
