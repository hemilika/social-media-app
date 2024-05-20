import axios from "axios";

const useLikePost = async (endpoint, post) => {
  try {
    const response = await axios.post(
      endpoint,
      {
        post,
      },
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

export const useCommentPost = async (endpoint, comment) => {
  try {
    const response = await axios.post(
      endpoint,
      {
        comment,
      },
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

export default useLikePost;
