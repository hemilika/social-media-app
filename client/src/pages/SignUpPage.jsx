import { Stack } from "@mui/material";
import SignUpForm from "../components/login/SignUpForm";
import devconnectbackground from "/devconnectbackground.jpg";
const SignUpPage = () => {
  return (
    <Stack direction="row" alignItems="center">
      <img src={devconnectbackground} height="730" width="800px" />
      <SignUpForm />
    </Stack>
  );
};

export default SignUpPage;
