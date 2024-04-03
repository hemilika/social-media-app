import Drawer from "@mui/material/Drawer";
import DrawerList from "./DrawerList";
const LeftDrawer = ({ open, handleClose }) => {
  return (
    <Drawer open={open} onClose={handleClose}>
      <DrawerList />
    </Drawer>
  );
};

export default LeftDrawer;
