import { useState } from "react";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";

import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../../store/user/userSlice";

const UpdateUserDataForm = ({ user }) => {
  const { email } = user;
  const currentFullName = user?.user_metadata?.fullName;

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName) return;
    await dispatch(updateCurrentUser({ fullName, avatar }));

    setAvatar(currentFullName);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      headingText="Update user data"
      btnText={"Update Account"}
    >
      <Input
        id="email"
        label="Email address"
        type="email"
        disabled={true}
        placeholder={email}
      />
      <Input
        id="fullName"
        label="Full name"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Input
        type="file"
        label="Avatar image"
        onChange={(e) => setAvatar(e.target.files[0])}
      />
    </Form>
  );
};

export default UpdateUserDataForm;
