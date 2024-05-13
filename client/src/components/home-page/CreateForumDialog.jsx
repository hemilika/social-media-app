import {
  Button,
  Dialog,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCreateForum from "../../hooks/use-create-forum";

const CreateForumDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleCreateForum = async (details) => {
    await useCreateForum(details);
    navigate("/forums");
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack spacing={2} padding="20px" width="400px">
        <Typography variant="body1">Forum Details</Typography>
        <Divider />
        <TextField label="Forum Name" {...register("forumName")} />
        <TextField
          label="Forum Description"
          multiline
          minRows={2}
          {...register("forumDescription")}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit(handleCreateForum)}>
            Create Forum
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default CreateForumDialog;
