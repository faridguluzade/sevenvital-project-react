import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getTestimonials } from "../services/apiTestimonial";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, [setTestimonials]);

  return { testimonials };
};
