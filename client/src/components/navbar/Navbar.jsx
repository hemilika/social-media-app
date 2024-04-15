import { Typography, AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import NavRightContent from "./NavRightContent";
import SearchBar from "./SearchBar";
import { Navigate, Outlet } from "react-router-dom";
import devconnect from "/devconnectlogo.png";
import { useState } from "react";
import LeftDrawer from "./LeftDrawer";
import { Menu } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "../../hooks/AppContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { navbarItems } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [openNotifications, setOpenNotifications] = useState(false);

  const handleNotifications = (e) => {
    setNotificationsAnchorEl(e.currentTarget);
    setOpenNotifications(true);
  };
  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
    setOpenNotifications(false);
  };
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navContentStyle = {
    cursor: "pointer",
  };

  return (
    <Stack spacing={8}>
      <AppBar color="default" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            color="inherit"
            variant="contained"
          >
            <Menu />
          </IconButton>
          <LeftDrawer open={open} handleClose={handleClose} />
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-evenly"
            width="100%"
            alignItems="center"
          >
            <Stack
              direction="row"
              spacing={1}
              onClick={() => navigate("/home")}
              sx={{ cursor: "pointer" }}
            >
              <img src={devconnect} width={35} height={32} />
              <Typography variant="h6">DevConnect</Typography>
            </Stack>
            <Stack>
              <SearchBar />
            </Stack>
            <Stack direction={"row"} spacing={3}>
              {navbarItems.map((content, index) => {
                return (
                  <NavRightContent
                    handleNotifications={handleNotifications}
                    handleNotificationsClose={handleNotificationsClose}
                    openNotifications={openNotifications}
                    notificationsAnchorEl={notificationsAnchorEl}
                    key={index}
                    contentName={content.contentName}
                    icon={content.icon}
                    badge={content.badge}
                    style={navContentStyle}
                    navigationPath={content.navigationPath}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Stack>
  );
};

export default Navbar;
