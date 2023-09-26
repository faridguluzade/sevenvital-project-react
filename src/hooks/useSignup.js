import { useDispatch, useSelector } from "react-redux";

import { signup as signupUser } from "../store/user/userSlice";

export const useSignup = () => {
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signup = (userData) => {
    dispatch(signupUser(userData));
  };

  return { signup, isLoading: status === "loading" };
};
