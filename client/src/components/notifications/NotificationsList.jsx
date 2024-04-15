import { AccessTime, LockClock } from "@mui/icons-material";
import { Avatar, MenuItem, Stack, Typography } from "@mui/material";

const NotificationsList = ({ message, time }) => {
  return (
    <MenuItem>
      <Stack spacing={2} direction="row" alignItems="center">
        <Avatar sx={{ width: "50px", height: "50px" }} />
        <Stack>
          <Typography variant="subtitle2" color="GrayText">
            {message}
          </Typography>
          <Stack direction="row" alignItems="center">
            <AccessTime />
            <Typography variant="subtitle2" color="GrayText">
              {time}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </MenuItem>
  );
};

export default NotificationsList;