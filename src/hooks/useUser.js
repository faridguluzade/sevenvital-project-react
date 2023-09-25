import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getCurrentUser } from "../services/apiAuth";

export const useUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, [setUser]);

  return { user };
};
