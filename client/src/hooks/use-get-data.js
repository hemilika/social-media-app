import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";

const useGetData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchValue } = useContext(AppContext);

  const headerToken = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    params: {
      search: searchValue,
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
  }, [searchValue]);

  return { data, loading };
};

export default useGetData;
