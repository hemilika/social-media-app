import { EventNote, Forum, PostAdd } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { PermMedia } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import useAddPost from "../../hooks/use-add-post";
import { useContext, useState } from "react";
import CreateForumDialog from "./CreateForumDialog";
import { AppContext } from "../../hooks/AppContext";

const AddPost = ({ user }) => {
  const [openForumCreate, setOpenForumCreate] = useState(false);

  const { optimisticUpdate } = useContext(AppContext);

  const { register, handleSubmit, reset } = useForm();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleAddPost = async (formData) => {
    const currentDate = new Date(Date.now())
      .toISOString()
      .replace("Z", "+00:00");
    const postData = {
      description: formData.description,
      posterUsername: user.username,
      profilePicture: user.profilePicture,
      media: formData.media || "",
      datePosted: currentDate,
    };
    const { response } = await useAddPost(postData);
    if (response?.data) {
      optimisticUpdate({ post: response?.data });
    }
    reset({ description: "" });
  };
  return (
    <>
      <Card sx={{ mt: "10px", padding: "10px" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src={user?.profilePicture}
            sx={{ border: "2px solid", width: "50px", height: "50px" }}
          />
          <TextField
            {...register("description", { required: true })}
            placeholder="Add something to your feed"
            fullWidth
            sx={{
              padding: "5px",
              "& .MuiInputBase-root": {
                borderRadius: "50px",
              },
            }}
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  variant="filled"
                  sx={{ cursor: "pointer" }}
                  onClick={handleSubmit(handleAddPost)}
                >
                  <Typography color="Highlight">POST</Typography>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-evenly">
          <Button startIcon={<PermMedia />} component="label">
            <Typography variant="button" color="black" fontFamily="unset">
              Media
            </Typography>
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            startIcon={<Forum />}
            onClick={() => setOpenForumCreate(true)}
          >
            <Typography variant="button" color="black" fontFamily="unset">
              Create a forum
            </Typography>
          </Button>
          <Button startIcon={<EventNote />}>
            <Typography variant="button" color="black" fontFamily="unset">
              Post on a forum
            </Typography>
          </Button>
        </Stack>
      </Card>
      <CreateForumDialog open={openForumCreate} setOpen={setOpenForumCreate} />
    </>
  );
};

export default AddPost;
