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
import { useState } from "react";
import { Stack } from "@mui/material";

const LoginForm = () => {
  const [loginError, setLoginError] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    const { response, error } = await useLogin(formData);
    if (error) {
      if (error.response.status === 401) {
        setLoginError("Username or password incorrect");
      }
    }
    if (response.status === 200) {
      setLoginError();
      navigate("/home");
    }
  };

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
            error={errors?.username || loginError}
            helperText={errors?.username?.message || loginError}
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
            error={errors?.password || loginError}
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
          <Stack justifyContent="flex-end" direction="row">
            <Link to={"/sign-up"}>Don't have an account? Sign Up</Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
