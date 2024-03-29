import { Typography, AppBar, Toolbar, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NavRightContent from "./NavRightContent";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
import devconnect from "../../../public/devconnectlogo.png";
const Navbar = () => {
  const navContentStyle = {
    cursor: "pointer",
  };
  const navbarItems = [
    {
      navigationPath: "/home",
      contentName: "Home",
      icon: <HomeIcon />,
    },
    {
      navigationPath: "/connections",
      contentName: "Connections",
      icon: <PeopleIcon />,
    },
    {
      navigationPath: "/forums",
      contentName: "Forum",
      icon: <ForumIcon />,
    },
    {
      contentName: "Notifications",
      badge: "Notifications",
      icon: <NotificationsIcon />,
    },
    {
      navigationPath: "/account",
      contentName: "Account",
      icon: <AccountBoxIcon />,
    },
  ];

  return (
    <Stack spacing={8}>
      <AppBar color="default" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-evenly"
            width="100%"
            alignItems="center"
          >
            <Stack direction="row" spacing={1}>
              <img src={devconnect} width={35} height={32} />
              <Typography variant="h6">DevConnect</Typography>
            </Stack>
            <Stack>
              <SearchBar />
            </Stack>
            <Stack direction={"row"} spacing={3}>
              {navbarItems.map((content) => {
                return (
                  <NavRightContent
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
