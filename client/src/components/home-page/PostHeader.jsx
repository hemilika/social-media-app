import { Delete } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import useDeletePost from "../../hooks/use-delete-post";
import DeletePostDialog from "./DeletePostDialog";
import { useContext, useState } from "react";
import { AppContext } from "../../hooks/AppContext";

const PostHeader = ({ post, user }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const { optimisticUpdate } = useContext(AppContext);
  const handleDeletePost = () => {
    useDeletePost(post._id);
    setOpenDeleteDialog(false);
    optimisticUpdate({ id: post._id, isDeleted: true });
  };
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: "2px" }}>
        {post?.posterUsername}
      </Typography>
      {post?.posterUsername === user ? (
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

export default PostHeader;
