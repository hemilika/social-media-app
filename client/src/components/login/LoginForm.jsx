import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, Link } from "react-router-dom";

import devConnectLogo from "/devconnectlogo.png";

import { useForm } from "react-hook-form";
import useLogin from "../../hooks/use-login";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (formData) => {
    const response = useLogin(formData);
    console.log(response);
  };
  // const navigate = useNavigate();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ mt: "-100px", width: "100px", height: "100px" }}
          src={devConnectLogo}
        />
        <Typography component="h1" variant="h5">
          Sign in to DevConnect
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
            fullWidth
            label="Username"
            autoFocus
            error={errors?.username}
            helperText={errors?.username?.message}
          />
          <TextField
            {...register("password", {
              required: "Enter your password",
            })}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            error={errors?.password}
            helperText={errors?.password?.message}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(handleLogin)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={"/forgot-password"}>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to={"/sign-up"}>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
