import { Delete, Logout } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

const AccountDelete = () => {
  return (
    <Stack>
      <Typography variant="h6">Account Security</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Manage your account security.
      </Typography>
      <Stack direction="row" spacing={2} paddingTop="10px">
        <Button startIcon={<Logout />} variant="contained" color="inherit">
          Log out
        </Button>
        <Button
          startIcon={<Delete color="error" />}
          color="inherit"
          variant="contained"
        >
          <Typography color="error" variant="button">
            Delete my account
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default AccountDelete;
