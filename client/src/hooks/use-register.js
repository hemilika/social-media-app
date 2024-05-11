import axios from "axios";

export function getCurrentDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  return day + "/" + month + "/" + year;
}
const useRegister = async (props) => {
  try {
    const currentDate = getCurrentDate();
    const dateJoined = new Date(currentDate);
    const response = await axios.post("http://localhost:5000/register", {
      fullName: props.fullName,
      email: props.email,
      username: props.username,
      password: props.password,
      dateJoined: dateJoined,
    });
    return { response };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default useRegister;
