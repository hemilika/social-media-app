import { Stack } from "@mui/material";
import ForgotPasswordForm from "../components/login/ForgotPasswordForm";
import devconnectbackground from "/devconnectbackground.jpg";
const ForgotPasswordPage = () => {
  return (
    <Stack direction="row" alignItems="center">
      <img src={devconnectbackground} height="730" width="800px" />
      <ForgotPasswordForm />
    </Stack>
  );
};

export default ForgotPasswordPage;
