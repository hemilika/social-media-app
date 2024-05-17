import { Grid } from "@mui/material";
import SignUpForm from "../components/login/SignUpForm";
import devconnectbackground from "/devconnectbackground.jpg";
const SignUpPage = () => {
  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <img src={devconnectbackground} width="110%" />
      </Grid>
      <Grid item xs={6} md={6} alignContent="center" mb="80px">
        <SignUpForm />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
