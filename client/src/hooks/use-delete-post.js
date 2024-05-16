import axios from "axios";

const useDeletePost = async (endpoint) => {
  console.log(endpoint);
  try {
    const response = await axios.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return { response };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default useDeletePost;
