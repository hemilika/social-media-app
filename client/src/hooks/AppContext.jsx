import { createContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
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
    <AppContext.Provider value={{ navbarItems }}>
      {children}
    </AppContext.Provider>
  );
};
