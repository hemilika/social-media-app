import {
  Comment,
  EmojiEmotions,
  Favorite,
  Sync,
  Textsms,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddForumPost from "./AddForumPost";
import useGetData from "../../hooks/use-get-data";

const MainContentForums = () => {
  const { data: forumPosts, loading } = useGetData(
    "http://localhost:5000/forum-posts"
  );
  const { data: user } = useGetData("http://localhost:5000/users");
  if (loading) return <p>Loading posts...</p>;
  console.log(forumPosts);
  return (
    <Stack spacing={2}>
      <AddForumPost user={user[0]} />
      {forumPosts.map((post) => {
        return (
          <Card>
            <CardHeader
              title={`${post.forumPosted}`}
              subheader={`Posted by: ${post.posterUsername}`}
            />
            <Divider variant="middle" />
            <CardContent>
              <Stack>
                <Typography variant="body1">{post.description}</Typography>
                <Card
                  sx={{
                    mt: "10px",
                    borderRadius: "none",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Card>
                <Divider />
                <Stack>
                  <Stack
                    justifyContent="flex-start"
                    direction="row"
                    sx={{ m: "5px 0px" }}
                  >
                    <IconButton size="small">
                      <Favorite color="error" />
                      {post.likes}
                    </IconButton>
                    <IconButton size="small">
                      <Textsms color="primary" />
                      {post.comments.length}
                    </IconButton>
                  </Stack>
                  <Divider />
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={4}
                    sx={{ m: "5px" }}
                  >
                    <Button startIcon={<Favorite />} color="inherit">
                      Like
                    </Button>
                    <Button startIcon={<Comment />} color="inherit">
                      Comment
                    </Button>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <TextField
                      fullWidth
                      placeholder="Add a comment..."
                      InputProps={{
                        endAdornment: <Button>ADD</Button>,
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: "50px",
                        },
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default MainContentForums;
