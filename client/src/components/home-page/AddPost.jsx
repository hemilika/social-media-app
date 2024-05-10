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

const AddPost = ({ profile }) => {
  return (
    <Card sx={{ mt: "10px", padding: "10px" }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar
          src={profile}
          sx={{ border: "2px solid", width: "50px", height: "50px" }}
        />
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
