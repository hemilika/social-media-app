import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const Comments = ({ comments }) => {
  return (
    <Stack marginBottom="5px">
      {comments.map((comment, index) => {
        return (
          <Stack direction="row" spacing={2} alignItems="center" key={index}>
            <Avatar src={comment.profilePicture} />
            <Stack>
              <Typography color="gray" fontWeight="bold">
                {comment.user}
              </Typography>
              <Typography>{comment.comment_message}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Comments;
