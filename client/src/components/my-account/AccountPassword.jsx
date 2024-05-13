import { Lock, Visibility } from "@mui/icons-material";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AccountPassword = () => {
  const [currentVisiblePassword, setCurrentVisiblePassword] = useState(false);
  const [newVisiblePassword, setNewVisiblePassword] = useState(false);

  return (
    <Stack spacing={1}>
      <Typography variant="h6">Password</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Change your password.
      </Typography>
      <Stack direction="row" justifyContent="space-between" paddingTop="10px">
        <TextField
          label="Current Password"
          type={currentVisiblePassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Visibility
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    setCurrentVisiblePassword(!currentVisiblePassword)
                  }
                />
              </InputAdornment>
            ),
          }}
          sx={{ width: "500px" }}
        />
        <TextField
          label="New Password"
          type={newVisiblePassword ? "text" : "password"}
          sx={{ width: "500px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Visibility
                  sx={{ cursor: "pointer" }}
                  onClick={() => setNewVisiblePassword(!newVisiblePassword)}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default AccountPassword;
