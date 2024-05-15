import { Comment, Favorite, Textsms } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddForumPost from "./AddForumPost";
import useGetData from "../../hooks/use-get-data";
import DatePosted from "../home-page/DatePosted";
import useLikePost from "../../hooks/use-like-post";
import { useContext, useState } from "react";
import { AppContext } from "../../hooks/AppContext";

const MainContentForums = ({ forumPosts, loading }) => {
  const [isLikedPost, setIsLikedPost] = useState({});
  const { data: user } = useGetData("http://localhost:5000/users");

  const { optimisticUpdate } = useContext(AppContext);

  const likeForumPost = async (post) => {
    const { response } = await useLikePost(
      `http://localhost:5000/forum-posts/${post._id}/like`,
      post
    );
    optimisticUpdate({ post: response?.data, postType: "forum" });
    setIsLikedPost((prevIsLiked) => ({
      ...prevIsLiked,
      [post._id]: true,
    }));
  };
  if (loading) return <p>Loading posts...</p>;
  return (
    <Stack spacing={2}>
      <AddForumPost user={user[0]} />
      {forumPosts.map((post) => {
        return (
          <Card>
            <CardHeader
              title={`${post.forumPosted}`}
              subheader={
                <DatePosted
                  date={post.datePosted}
                  poster={post.posterUsername}
                />
              }
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
                  <Divider />
                  <Card
                    sx={{
                      mt: "10px",
                      borderRadius: "none",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {post?.media && (
                      <CardContent
                        sx={{ maxWidth: "700px", maxHeight: "500px" }}
                      >
                        <img
                          src={post?.media}
                          alt="Couldn't load image"
                          width="700px"
                        />
                      </CardContent>
                    )}
                  </Card>
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
                    {isLikedPost[post._id] ? (
                      <Button startIcon={<Favorite />} color="error">
                        Liked
                      </Button>
                    ) : (
                      <Button
                        startIcon={<Favorite />}
                        color="inherit"
                        onClick={() => likeForumPost(post)}
                      >
                        Like
                      </Button>
                    )}
                    <Button startIcon={<Comment />} color="inherit">
                      Comment
                    </Button>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      src={user[0]?.profilePicture}
                      sx={{ width: "50px", height: "50px" }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Add a comment..."
                      InputProps={{
                        endAdornment: <Button>SEND</Button>,
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
