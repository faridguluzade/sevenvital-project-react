import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

import { useForm } from "react-hook-form";
import { updateCurrentUser } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";

const UpdatePasswordForm = () => {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  const onSubmit = async ({ password }) => {
    await dispatch(updateCurrentUser({ password }));
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      headingText="Update password"
      btnText={"Update password"}
    >
      <Input
        id="password"
        label="New Password (min 8 chars)"
        type="password"
        register={register}
        condition={{
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        }}
        error={errors.password?.message}
      />
      <Input
        id="passwordConfirm"
        label="Confirm Password"
        type="password"
        register={register}
        condition={{
          required: "This field is required",
          validate: (value) =>
            value === getValues().password || "Passwords needs to match",
        }}
        error={errors.passwordConfirm?.message}
      />
    </Form>
  );
};

export default UpdatePasswordForm;
