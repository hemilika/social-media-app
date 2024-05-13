import axios from "axios";

const useCreateForum = async (forumDetails) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/forums",
      forumDetails,
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

export default useCreateForum;
