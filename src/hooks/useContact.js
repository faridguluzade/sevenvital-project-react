import { useState } from "react";
import toast from "react-hot-toast";

import { insertContact } from "../services/apiContact";

export const useContact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const contact = async (contact) => {
    setIsLoading(true);
    try {
      await insertContact(contact);
      toast.success("Message successfuly sended");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { contact, isLoading };
};
