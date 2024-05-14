import {
  Avatar,
  Button,
  Card,
  InputAdornment,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { PermMedia } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

const AddForumPost = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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

  //   const handleAddPost = async (formData) => {
  //     const currentDate = new Date(Date.now())
  //       .toISOString()
  //       .replace("Z", "+00:00");
  //     const postData = {
  //       description: formData.description,
  //       posterUsername: user.username,
  //       profilePicture: user.profilePicture,
  //       media: uploadedImage,
  //       datePosted: currentDate,
  //     };
  //     const { response } = await useAddPost(postData);
  //     if (response?.data) {
  //       optimisticUpdate({ post: response?.data });
  //     }
  //     reset({ description: "" });
  //     setUploadedImage(null);
  //   };
  return (
    <>
      <Card sx={{ mt: "10px", padding: "10px" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            {...register("description", { required: true })}
            placeholder="Post on a forum..."
            autoComplete="off"
          />
          <Select />
          <Button>POST</Button>
        </Stack>
        <Stack direction="row" justifyContent="space-evenly">
          <Button startIcon={<PermMedia />} component="label">
            <Typography variant="button" color="black" fontFamily="unset">
              Media
            </Typography>
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
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
    </>
  );
};

export default AddForumPost;
