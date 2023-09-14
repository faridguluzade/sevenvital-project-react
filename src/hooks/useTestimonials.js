import { useEffect, useState } from "react";
import { getTestimonials } from "../services/apiTestimonial";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [setTestimonials]);

  return { testimonials };
};
