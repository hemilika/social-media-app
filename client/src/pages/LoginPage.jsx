import { Stack } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import devconnectbackground from "/devconnectbackground.jpg";
const LoginPage = () => {
  return (
    <Stack direction="row" alignItems="center">
      <img src={devconnectbackground} />
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
