import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function useFetch(apiFunc) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await apiFunc();

        setData(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiFunc]);

  return { data, isLoading };
}
