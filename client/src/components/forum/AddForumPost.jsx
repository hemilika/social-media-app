import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AddImage from "../AddImage";

const AddForumPost = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const { register, handleSubmit, reset } = useForm();

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
            multiline
            sx={{ width: "90%" }}
            {...register("description", { required: true })}
            placeholder="Post on a forum..."
            autoComplete="off"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Forum</InputLabel>
            <Select
              sx={{ width: "40%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Forum"
            >
              <MenuItem value={1}>Select forum </MenuItem>
            </Select>
          </FormControl>
          <Button>POST</Button>
        </Stack>
        <Stack mt="10px" alignItems={"center"}>
          <AddImage setUploadedImage={setUploadedImage} />
        </Stack>
        <Stack direction="row" justifyContent="space-evenly"></Stack>
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
