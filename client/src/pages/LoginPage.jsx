import { Stack } from "@mui/material";
import devconnectbackground from "/devconnectbackground.jpg";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <Stack direction="row" alignItems="center">
      <img src={devconnectbackground} height="730" width="800px" />
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
