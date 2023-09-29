import { useForm } from "react-hook-form";

import { useLogin } from "../../hooks/useLogin";

import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

const LoginForm = () => {
  const { login, isLoading } = useLogin();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  console.log(errors);
  const onSubmit = ({ email, password }) => {
    login({ email, password });
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
      headingText="Login"
      btnText={!isLoading ? "Log in" : "Logging in"}
    >
      <Input
        id="email"
        label="Email address"
        type="email"
        required
        placeholder={"you@example.com"}
        register={register}
        disabled={isLoading}
        condition={{
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        }}
        error={errors.email?.message}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder={"*********"}
        disabled={isLoading}
        register={register}
        condition={{ required: "This field is required" }}
        error={errors.password?.message}
      />
    </Form>
  );
};

export default LoginForm;
