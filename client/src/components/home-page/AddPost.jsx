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
import { useNavigate } from "react-router-dom";
import AddImage from "../AddImage";

const AddPost = ({ user }) => {
  const [openForumCreate, setOpenForumCreate] = useState(false);

  const navigate = useNavigate();

  const [uploadedImage, setUploadedImage] = useState(null);
  const { optimisticUpdate } = useContext(AppContext);

  const { register, handleSubmit, reset } = useForm();

  const handleAddPost = async (formData) => {
    const currentDate = new Date(Date.now())
      .toISOString()
      .replace("Z", "+00:00");
    const postData = {
      description: formData.description,
      posterUsername: user.username,
      profilePicture: user.profilePicture,
      media: uploadedImage,
      datePosted: currentDate,
    };
    const { response } = await useAddPost(postData);
    if (response?.data) {
      optimisticUpdate({ post: response?.data });
    }
    reset({ description: "" });
    setUploadedImage(null);
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
          <AddImage setUploadedImage={setUploadedImage} />
          <Button
            startIcon={<Forum />}
            onClick={() => setOpenForumCreate(true)}
          >
            <Typography variant="button" color="black" fontFamily="unset">
              Create a forum
            </Typography>
          </Button>
          <Button startIcon={<EventNote />} onClick={() => navigate("/forums")}>
            <Typography variant="button" color="black" fontFamily="unset">
              Post on a forum
            </Typography>
          </Button>
        </Stack>
        {uploadedImage ? (
          <Stack
            padding={"20px"}
            ml="10%"
            justifyContent="center"
            alignItems="center"
            maxHeight={"400px"}
            maxWidth={"800px"}
          >
            <img src={uploadedImage} alt="uploaded image" />
          </Stack>
        ) : null}
      </Card>
      <CreateForumDialog open={openForumCreate} setOpen={setOpenForumCreate} />
    </>
  );
};

export default AddPost;
