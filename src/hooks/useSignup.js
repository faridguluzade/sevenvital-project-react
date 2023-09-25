import { useState } from "react";

import { signup as signupApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (data) => {
    setIsLoading(true);
    try {
      await signupApi(data);
      toast.success(
        "Account successfuly created! Please verify the new account from the user's email address."
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading };
};
