import { Menu } from "@mui/material";
import { notifications } from "../../dummy-data/dummyData";
import NotificationsList from "./NotificationsList";
const Notifcations = ({ open, onClose, anchorEl }) => {
  return (
    <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
      {notifications.map((notification) => {
        return (
          <NotificationsList
            key={notification.id}
            message={notification.message}
            time={notification.time}
          />
        );
      })}
    </Menu>
  );
};

export default Notifcations;
