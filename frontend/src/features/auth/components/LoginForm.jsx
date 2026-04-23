import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    try {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      if (email !== user.email) {
        console.log("NO user found");
        return;
      }
      navigate("/");
    } catch (error) {
      console.error("invalid user");
      setUser(null);
    }
    // localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
      <Input
        label={"Email"}
        placeholder={"Enter your email"}
        inputType={"text"}
        name={"email"}
        inputOnChange={(e) => setEmail(e.target.value)}
        inputValue={email}
      />
      <Input
        label={"password"}
        placeholder={"Enter your password"}
        inputType={"password"}
        name={"password"}
        inputOnChange={(e) => setPassword(e.target.value)}
        inputValue={password}
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
