import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        label={"FullName"}
        name={"fullname"}
        placeholder={"Enter fullname"}
        inputType={"text"}
      />
      <Input
        label={"Email"}
        name={"email"}
        placeholder={"Enter email"}
        inputType={"email"}
      />
      <Input
        label={"Password"}
        name={"password"}
        placeholder={"Enter password"}
        inputType={"password"}
      />
      <Button>Sign Up</Button>
    </form>
  );
};
export default SignUpForm;
