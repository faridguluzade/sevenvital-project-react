import { useForm } from "react-hook-form";

import { useSignup } from "../../hooks/useSignup";

import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

// Email regex: /\S+@\S+\.\S+/

const SignupForm = () => {
  const { signup, isLoading } = useSignup();
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;

  const onSubmit = ({ fullName, newEmail, newPassword }) => {
    signup({ fullName, email: newEmail, password: newPassword });
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      headingText="Register"
      btnText={!isLoading ? "Register" : "Registering"}
      disabled={isLoading}
    >
      <Input
        id="fullName"
        label="Full Name"
        type="text"
        disabled={isLoading}
        register={register}
        required
        condition={{
          required: "This field is required",
        }}
        error={errors.fullName?.message}
      />
      <Input
        id="newEmail"
        label="Email address"
        type="text"
        required
        disabled={isLoading}
        register={register}
        condition={{
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        }}
        error={errors.newEmail?.message}
      />

      <Input
        id="newPassword"
        label="New Password"
        type="password"
        required
        disabled={isLoading}
        register={register}
        condition={{ required: "This field is required" }}
        error={errors.newPassword?.message}
      />
      <Input
        id="newPasswordConfirm"
        label="Confirm Password"
        type="password"
        required
        disabled={isLoading}
        register={register}
        condition={{
          required: "This field is required",
          validate: (value) =>
            value === getValues().newPassword || "Passwords needs to match",
        }}
        error={errors.newPasswordConfirm?.message}
      />
    </Form>
  );
};

export default SignupForm;
