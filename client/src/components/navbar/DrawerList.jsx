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
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DrawerList = ({ onClose }) => {
  const { navbarItems } = useContext(AppContext);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`${path}`);
    onClose();
  };

  return (
    <Box sx={{ width: 270 }}>
      <Stack spacing={5}>
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
        <Button endIcon={<Logout />} onClick={() => navigate("/login")}>
          Logout
        </Button>
      </Stack>
    </Box>
  );
};

export default DrawerList;
