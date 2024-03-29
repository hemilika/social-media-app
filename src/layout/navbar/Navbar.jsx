import { Typography, AppBar, Toolbar, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NavRightContent from "./NavRightContent";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navContentStyle = {
    cursor: "pointer",
  };
  const navbarItems = [
    {
      contentName: "Home",
      icon: <HomeIcon />,
    },
    {
      contentName: "Connections",
      icon: <PeopleIcon />,
    },
    {
      contentName: "Forum",
      icon: <ForumIcon />,
    },
    {
      contentName: "Notifications",
      badge: "Notifications",
      icon: <NotificationsIcon />,
    },
    {
      contentName: "Account",
      icon: <AccountBoxIcon />,
    },
  ];

  return (
    <AppBar color="default" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-evenly"
          width="100%"
          alignItems="center"
        >
          <Stack>
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
                />
              );
            })}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
