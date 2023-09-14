import { useEffect, useState } from "react";
import { getAccordions } from "../services/apiAccordion";

export const useAccordions = () => {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getAccordions();
        setAccordions(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [setAccordions]);

  return { accordions };
};
