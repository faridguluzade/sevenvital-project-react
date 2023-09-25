import { useForm } from "react-hook-form";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
  const { login, isLoading } = useLogin();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = ({ email, password }) => {
    login({ email, password });
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
      headingText="Login"
      btnText="Login"
    >
      <Input
        id="email"
        label="Email address"
        type="email"
        register={register}
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
        register={register}
        condition={{ required: "This field is required" }}
        error={errors.password?.message}
      />
    </Form>
  );
};

export default LoginForm;
