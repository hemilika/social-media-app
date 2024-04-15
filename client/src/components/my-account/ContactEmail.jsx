import { AddCircle, Email } from "@mui/icons-material";
import {
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ContactEmail = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">Contact Email</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Manage your accounts email address for contacting.
      </Typography>
      <Stack justifyContent="space-between" direction="row" paddingTop="10px">
        <TextField
          sx={{ mt: "5px", mb: "15px" }}
          type="email"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <Button
          startIcon={<AddCircle color="primary" />}
          variant="contained"
          color="inherit"
          sx={{ height: "40px" }}
        >
          <Typography color="grey" variant="button">
            Add another email
          </Typography>
        </Button>
      </Stack>
      <Divider sx={{ mt: "20px" }} />
    </Stack>
  );
};

export default ContactEmail;
