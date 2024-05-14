import axios from "axios";

const useLikePost = async (post) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/posts/${post._id}/like`,
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

export const useCommentPost = async (postId, comment) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/posts/${postId}/comment`,
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
