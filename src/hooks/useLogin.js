import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    setIsLoading(true);
    try {
      const { user } = await loginApi(data);
      navigate("/");
      toast.success(`Welcome back ${user.user_metadata.fullName}!`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
