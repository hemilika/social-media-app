import { Badge, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Notifcations from "../notifications/Notifcations";
const NavRightContent = ({
  handleNotifications,
  handleNotificationsClose,
  openNotifications,
  notificationsAnchorEl,
  contentName,
  icon,
  badge,
  style,
  navigationPath,
}) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    if (navigationPath) {
      navigate(`${path}`);
    }
  };

  return (
    <>
      {badge ? (
        <>
          <Stack
            alignItems="center"
            sx={style}
            onClick={(e) => handleNotifications(e)}
          >
            <Badge badgeContent={3} color="primary">
              {icon}
            </Badge>
            <Typography variant="small" color="grey">
              {contentName}
            </Typography>
          </Stack>
          <Notifcations
            onClose={handleNotificationsClose}
            open={openNotifications}
            anchorEl={notificationsAnchorEl}
          />
        </>
      ) : (
        <Stack
          alignItems="center"
          sx={style}
          onClick={() => handleNavigate(navigationPath)}
        >
          {icon}
          <Typography variant="small" color="grey">
            {contentName}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default NavRightContent;
