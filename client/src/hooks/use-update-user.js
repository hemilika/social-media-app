import axios from "axios";

const useUpdateUser = async (props) => {
  const formattedProps = {
    ...props,
    fullName: props.firstName + " " + props.lastName,
  };
  try {
    const response = await axios.patch(
      "http://localhost:5000/users",
      {
        ...formattedProps,
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

export default useUpdateUser;
