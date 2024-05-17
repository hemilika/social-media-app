import { Grid, Stack } from "@mui/material";
import devconnectbackground from "/devconnectbackground.jpg";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <img src={devconnectbackground} width="110%" />
      </Grid>
      <Grid item xs={6} md={6} alignContent="center" mb="80px">
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
