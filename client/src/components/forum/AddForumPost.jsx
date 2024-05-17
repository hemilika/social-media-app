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
import { useContext, useState } from "react";
import AddMedia from "../AddMedia";
import useGetForumNames from "../../hooks/use-get-forum-names";
import useAddForumPost from "../../hooks/use-add-forum-post";
import { AppContext } from "../../hooks/AppContext";

const AddForumPost = ({ user }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [forumPosted, setForumPosted] = useState("");

  const { optimisticUpdate } = useContext(AppContext);

  const { forums, loading } = useGetForumNames(
    "http://localhost:5000/forum/names"
  );

  const { register, handleSubmit, reset } = useForm();

  const handleSelectForumChange = (event) => {
    setForumPosted(event.target.value);
  };

  const handleAddForumPost = async (formData) => {
    const currentDate = new Date(Date.now())
      .toISOString()
      .replace("Z", "+00:00");
    const postData = {
      description: formData.description,
      posterUsername: user.username,
      media: uploadedImage,
      datePosted: currentDate,
      forumPosted: forumPosted,
    };
    const { response } = await useAddForumPost(postData);
    optimisticUpdate({ post: response?.data, postType: "forum" });
    reset({ description: "" });
    setUploadedImage(null);
    setForumPosted("");
  };

  if (loading) return <p>Loading Forums...</p>;
  return (
    <>
      <Card sx={{ mt: "10px", padding: "10px" }}>
        <Stack direction="row" spacing={1}>
          <TextField
            multiline
            sx={{ width: "70%" }}
            {...register("description", { required: true })}
            placeholder="Post on a forum..."
            autoComplete="off"
          />

          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="demo-simple-select-label">Forum</InputLabel>
            <Select
              value={forumPosted}
              label="Forum"
              onChange={(e) => handleSelectForumChange(e)}
            >
              {forums.map((forum) => {
                return (
                  <MenuItem key={forum._id} value={forum.forumName}>
                    {forum.forumName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            onClick={handleSubmit(handleAddForumPost)}
            variant="contained"
          >
            POST
          </Button>
        </Stack>
        <Stack mt="10px" alignItems={"center"}>
          <AddMedia setUploadedImage={setUploadedImage} />
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
            <img
              src={uploadedImage}
              alt="uploaded image"
              width="700px"
              height="500px"
            />
          </Stack>
        ) : null}
      </Card>
    </>
  );
};

export default AddForumPost;
