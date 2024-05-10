import axios from "axios";
import { useState, useEffect } from "react";

const useGetData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const headerToken = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint, headerToken);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useGetData;
