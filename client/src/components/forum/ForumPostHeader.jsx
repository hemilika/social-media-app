import { Button, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../hooks/AppContext";
import useDeletePost from "../../hooks/use-delete-post";
import DeletePostDialog from "../home-page/DeletePostDialog";
import { Delete } from "@mui/icons-material";

const ForumPostHeader = ({ forumPost, user }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const { optimisticUpdate } = useContext(AppContext);

  const handleDeletePost = () => {
    useDeletePost(`http://localhost:5000/forum-posts/${forumPost._id}/delete`);
    setOpenDeleteDialog(false);
    optimisticUpdate({ id: forumPost._id, isDeleted: true, postType: "forum" });
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: "2px" }}>
        {forumPost.forumPosted}
      </Typography>
      {forumPost?.posterUsername === user.username ? (
        <Button
          onClick={() => setOpenDeleteDialog(true)}
          size="small"
          sx={{ width: "20px", height: "25px" }}
        >
          <Delete color="error" />
        </Button>
      ) : null}
      <DeletePostDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        handleDeletePost={handleDeletePost}
      />
    </Stack>
  );
};

export default ForumPostHeader;
