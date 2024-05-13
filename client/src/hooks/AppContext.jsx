import { createContext, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
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

  const optimisticUpdate = ({ post, id, isDeleted }) => {
    if (isDeleted) {
      setPosts((prev) => prev.filter((post) => post._id !== id));
    }
    if (post) setPosts((prev) => [post, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{ navbarItems, optimisticUpdate, posts, setPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};
