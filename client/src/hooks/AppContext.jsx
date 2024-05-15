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
      contentName: "Forums",
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
      // If a post is deleted, remove it from the posts array
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } else if (post) {
      // If a new or updated post is received
      setPosts((prev) => {
        // Check if the post already exists in the array
        const existingPostIndex = prev.findIndex((p) => p._id === post._id);
        if (existingPostIndex !== -1) {
          // If the post exists, update its likes count
          const updatedPosts = [...prev];
          updatedPosts[existingPostIndex] = { ...post };
          return updatedPosts;
        } else {
          // If the post doesn't exist, add it to the beginning of the array
          return [post, ...prev];
        }
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ navbarItems, optimisticUpdate, posts, setPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};
