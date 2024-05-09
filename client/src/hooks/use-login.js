import axios from "axios";

const useLogin = async (props) => {
  console.log(props);
  const response = await axios.post("http://localhost:5000/login");
  console.log(response);
  return response;
};

export default useLogin;
