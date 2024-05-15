import axios from "axios";

const useAddForumPost = async (postData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/forum-posts",
      postData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return { response };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default useAddForumPost;
