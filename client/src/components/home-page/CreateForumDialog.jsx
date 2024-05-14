import {
  Button,
  Dialog,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCreateForum from "../../hooks/use-create-forum";

const CreateForumDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, watch } = useForm();

  const { fields, append } = useFieldArray({
    control,
    name: "technologies",
  });

  const handleCreateForum = async (details) => {
    await useCreateForum(details);
    navigate("/forums");
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(watch());
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
        <Stack spacing={1}>
          {fields.map((field, index) => (
            <TextField
              key={field.id}
              label={`Technology ${index + 1}`}
              {...register(`technologies.${index}`)}
            />
          ))}
        </Stack>
        <Button variant="contained" onClick={() => append()}>
          Add Technology
        </Button>
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
