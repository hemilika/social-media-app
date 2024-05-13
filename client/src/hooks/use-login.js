import axios from "axios";

const useLogin = async (props) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      username: props.username,
      password: props.password,
    });
    localStorage.setItem("token", response.data.token);
    return { response };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default useLogin;
