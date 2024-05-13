import { ChangeCircle, Email } from "@mui/icons-material";
import {
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ContactEmail = ({ user, register }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">Contact Email</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Manage your accounts email address for contacting.
      </Typography>
      <Stack
        justifyContent="space-between"
        direction="row"
        paddingTop="10px"
        alignItems="center"
      >
        <TextField
          {...register("email")}
          sx={{ mt: "5px", mb: "15px" }}
          type="email"
          label="Email"
          defaultValue={user.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <Button
          startIcon={<ChangeCircle color="primary" />}
          variant="contained"
          color="inherit"
          sx={{ height: "40px" }}
        >
          <Typography color="grey" variant="button">
            Change Contact Email
          </Typography>
        </Button>
      </Stack>
      <Divider sx={{ mt: "20px" }} />
    </Stack>
  );
};

export default ContactEmail;
