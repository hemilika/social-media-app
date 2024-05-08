import axios from "axios";
import { useEffect, useState } from "react";

const useGetForums = () => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchForums = async () => {
    try {
      const response = await axios.get("http://localhost:5000/forums");
      setForums(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  return { forums, loading };
};

export default useGetForums;
