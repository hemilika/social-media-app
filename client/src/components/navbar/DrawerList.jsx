import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { AppContext } from "../../hooks/AppContext";
import devconnect from "/devconnectlogo.png";
import { Button, Stack, Typography } from "@mui/material";
import {
  Copyright,
  Facebook,
  Instagram,
  LinkedIn,
  Logout,
  YouTube,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DrawerList = ({ onClose, user }) => {
  const { navbarItems } = useContext(AppContext);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`${path}`);
    onClose();
  };

  return (
    <Box sx={{ width: 270 }}>
      <Stack height="100vh" justifyContent="space-between">
        <Stack>
          <Stack direction="row" spacing={2} alignItems="center" padding="15px">
            <img src={devconnect} width={50} height={45} />
            <Typography variant="h6">DevConnect</Typography>
          </Stack>
          <Divider />

          <List>
            {navbarItems
              .filter((content) => content.contentName !== "Notifications")
              .map((content, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavigate(content.navigationPath)}
                  >
                    <ListItemIcon>{content.icon}</ListItemIcon>
                    <ListItemText primary={content.contentName} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Stack>
        <Stack alignItems="center" marginBottom="50px">
          <Button
            sx={{ width: "50%" }}
            variant="outlined"
            endIcon={<Logout />}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Stack>
        <Stack spacing={5} alignItems="center" marginBottom="20px">
          <Stack direction="row" spacing={2}>
            <Instagram />
            <Facebook />
            <LinkedIn />
            <YouTube />
          </Stack>
          <Stack direction="row">
            Copyright
            <Copyright />
          </Stack>
          DevConnect 2024
        </Stack>
      </Stack>
    </Box>
  );
};

export default DrawerList;
