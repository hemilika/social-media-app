import axios from "axios";
import { useState, useEffect } from "react";

const useGetForumNames = (endpoint) => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);

  const headerToken = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint, headerToken);
      setForums(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { forums, loading };
};

export default useGetForumNames;
