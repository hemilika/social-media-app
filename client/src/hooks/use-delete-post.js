import axios from "axios";

const useDeletePost = async (id) => {
  try {
    const response = await axios.delete("http://localhost:5000/posts", id, {
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
