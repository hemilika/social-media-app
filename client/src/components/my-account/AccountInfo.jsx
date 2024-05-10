import { Upload } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AccountInfo = ({ user }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">Account</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Real-time information and activities of your property.
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-between" paddingTop="10px">
        <Stack direction="row" spacing={4} alignItems="center">
          <Avatar
            sx={{ width: "80px", height: "80px" }}
            src={user.profilePicture}
          />
          <Stack>
            <Typography variant="h6">Profile Picture</Typography>
            <Typography variant="subtitle2" color="GrayText">
              PNG,JPEG under 15MB
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Button color="inherit" variant="contained" startIcon={<Upload />}>
            <Typography color="GrayText" variant="button">
              Upload picture
            </Typography>
          </Button>
          <Button
            color="inherit"
            variant="contained"
            sx={{ background: "lightgrey" }}
          >
            <Typography color="GrayText" variant="button">
              Delete
            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h6">Full Name</Typography>
        <Stack direction="row" justifyContent="space-between" paddingTop="10px">
          <TextField
            label="First Name"
            sx={{ width: "400px" }}
            defaultValue={user.fullName.split(" ")[0]}
          />
          <TextField
            label="Last Name"
            sx={{ width: "400px" }}
            defaultValue={user.fullName.split(" ")[1]}
          />
        </Stack>
      </Stack>
      <Divider sx={{ paddingTop: "15px" }} />
    </Stack>
  );
};

export default AccountInfo;
