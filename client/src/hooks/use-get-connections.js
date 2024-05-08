import axios from "axios";
import { useEffect, useState } from "react";

const useGetConnections = () => {
  const [connections, setConnections] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/connections");
      setConnections(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching connections", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    connections,
  };
};

export default useGetConnections;
