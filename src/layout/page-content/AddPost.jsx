import { EventNote, Forum } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PermMedia } from "@mui/icons-material";
import panda from "../../../public/panda.webp";
const AddPost = () => {
  return (
    <Card sx={{ mt: "10px", padding: "10px" }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar sx={{ border: "1px solid black" }}>
          <img src={panda} alt="" width="100" height="100" />
        </Avatar>
        <TextField
          placeholder="Post something"
          fullWidth
          sx={{
            padding: "5px",
            "& .MuiInputBase-root": {
              borderRadius: "50px",
            },
          }}
        ></TextField>
      </Stack>
      <Stack direction="row" justifyContent="space-evenly">
        <Button startIcon={<PermMedia />}>
          <Typography variant="button" color="black" fontFamily="unset">
            Media
          </Typography>
        </Button>
        <Button startIcon={<Forum />}>
          <Typography variant="button" color="black" fontFamily="unset">
            Create a forum
          </Typography>
        </Button>
        <Button startIcon={<EventNote />}>
          <Typography variant="button" color="black" fontFamily="unset">
            Event
          </Typography>
        </Button>
      </Stack>
    </Card>
  );
};

export default AddPost;
