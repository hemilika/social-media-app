import { AccessTime } from "@mui/icons-material";
import { Avatar, MenuItem, Stack, Typography } from "@mui/material";

const NotificationsList = ({ read, user, message, time }) => {
  return (
    <MenuItem>
      <Stack spacing={2} direction="row" alignItems="center">
        <Avatar src={user} sx={{ width: "50px", height: "50px" }} />
        <Stack>
          <Typography
            variant="subtitle2"
            fontWeight={read ? "normal" : "bold"}
            color={read ? "GrayText" : "black"}
          >
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
