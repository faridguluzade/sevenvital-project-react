import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAccordions } from "../services/apiAccordion";

export const useAccordions = () => {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccordions();
        setAccordions(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, [setAccordions]);

  return { accordions };
};
