import axios from "axios";

const useAddConnection = async (connectionData) => {
  const { connections, fullName, username } = connectionData;
  try {
    const response = await axios.post(
      "http://localhost:5000/connections",
      { connections, fullName, username },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return { response };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

export default useAddConnection;
