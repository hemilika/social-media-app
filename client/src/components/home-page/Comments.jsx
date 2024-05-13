import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const Comments = ({ comments }) => {
  return (
    <Stack>
      {comments.map((comment) => {
        return (
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
            <Stack>
              <Typography color="gray">{comment.user}</Typography>
              <Typography>{comment.comment_message}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Comments;
