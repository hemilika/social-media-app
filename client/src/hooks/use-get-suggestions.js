import axios from "axios";
import { useEffect, useState } from "react";

const useGetSuggestions = () => {
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/suggestions");
      setSuggestions(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return { loading, suggestions };
};

export default useGetSuggestions;
