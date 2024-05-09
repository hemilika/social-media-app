import axios from "axios";
import { useState, useEffect } from "react";

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const headerToken = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/posts",
        headerToken
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { posts, loading };
};

export default useGetPosts;
