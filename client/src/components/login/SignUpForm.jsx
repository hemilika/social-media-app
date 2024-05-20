import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, Link } from "react-router-dom";
import devConnectLogo from "/devconnectlogo.png";

import useRegister from "../../hooks/use-register";

import { useForm } from "react-hook-form";
import { useState } from "react";

const SignUpForm = () => {
  const [registerError, setRegisterError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    const { response } = await useRegister(formData);
    if (response.status === 201) {
      navigate("/login");
    } else {
      setRegisterError("An error occurred, please try again");
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
          Sign up for DevConnect
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            {...register("fullName", { required: "Enter your full name" })}
            margin="normal"
            fullWidth
            label="Full Name"
            autoFocus
            error={!!errors?.fullName || !!registerError}
            helperText={errors?.fullName?.message || registerError}
          />
          <TextField
            {...register("email", { required: "Enter a valid email address" })}
            type="email"
            margin="normal"
            fullWidth
            label="Email address"
            autoFocus
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            {...register("username", { required: "Enter a username" })}
            error={!!errors?.username}
            helperText={errors?.username?.message}
          />
          <TextField
            {...register("password", { required: "Enter a password" })}
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(handleSignUp)}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link to={"/login"}>{"Already have an account? Log in"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;
