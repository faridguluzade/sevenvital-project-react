import { useSelector, useDispatch } from "react-redux";
import { login as loginUser } from "../store/user/userSlice";

export const useLogin = () => {
  const { loginLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const login = (userData) => {
    dispatch(loginUser(userData));
  };

  return { login, isLoading: loginLoading };
};
