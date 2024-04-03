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
const DrawerList = () => {
  const { navbarItems } = useContext(AppContext);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(`${path}`);
  };
  return (
    <Box sx={{ width: 270 }}>
      <Stack direction="row" spacing={2} alignItems="center" padding="15px">
        <img src={devconnect} width={50} height={45} />
        <Typography variant="h6">DevConnect</Typography>
      </Stack>
      <Divider />
      <List>
        {navbarItems.map((content, index) => (
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
      <Divider />

      <Button endIcon={<Logout />} variant="outlined">
        Logout
      </Button>
    </Box>
  );
};

export default DrawerList;
