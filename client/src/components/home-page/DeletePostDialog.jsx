import { Close } from "@mui/icons-material";
import { Button, Dialog, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const DeletePostDialog = ({ open, setOpen, handleDeletePost }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack spacing={2} padding="20px">
        <Close
          sx={{ cursor: "pointer" }}
          color="primary"
          onClick={handleClose}
          fontSize="small"
        />
        <Divider variant="fullWidth" />
        <Typography>Are you sure you want to delete your post</Typography>
        <Divider variant="fullWidth" />
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleDeletePost}>
            Confirm
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DeletePostDialog;
