import { Lock, Security, ViewArray, Visibility } from "@mui/icons-material";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";

const AccountPassword = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">Password</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Change your password.
      </Typography>
      <Stack direction="row" justifyContent="space-between" paddingTop="10px">
        <TextField
          label="Current Password"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Visibility />
              </InputAdornment>
            ),
          }}
          sx={{ width: "500px" }}
        />
        <TextField
          label="New Password"
          type="password"
          sx={{ width: "500px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Visibility />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default AccountPassword;
