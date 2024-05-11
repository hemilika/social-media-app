import axios from "axios";

const useAddPost = async (postData) => {
  try {
    const response = await axios.post("http://localhost:5000/posts", postData, {
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

export default useAddPost;
