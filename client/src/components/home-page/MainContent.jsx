import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  Stack,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { Comment, Favorite, Textsms } from "@mui/icons-material";
import LoadMore from "./LoadMore";
import DatePosted from "./DatePosted";
import Comments from "./Comments";
import PostHeader from "./PostHeader";
import useLikePost, { useCommentPost } from "../../hooks/use-like-post";
import { useContext, useState } from "react";
import { AppContext } from "../../hooks/AppContext";

const MainContent = ({ posts, loading, user }) => {
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState({});

  const { optimisticUpdate } = useContext(AppContext);

  const likePost = async (post) => {
    const { response } = await useLikePost(
      `http://localhost:5000/posts/${post._id}/like`,
      post
    );
    if (response?.data) {
      optimisticUpdate({ post: response?.data, postType: "post" });
      setIsLiked((prevIsLiked) => ({
        ...prevIsLiked,
        [post._id]: true,
      }));
    }
  };

  const commentPost = async (postId, user, comment) => {
    const commentData = {
      comment_message: comment,
      profilePicture: user.profilePicture,
      user: user.username,
    };

    if (comment.length !== 0) {
      const { response } = await useCommentPost(
        `http://localhost:5000/posts/${postId}/comment`,
        commentData
      );
      if (response?.data) {
        optimisticUpdate({ post: response?.data, postType: "post" });
      }
    }
    setComment("");
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading Posts...
      </div>
    );
  }
  return (
    <Stack>
      {posts?.map((post) => {
        return (
          <Card key={post._id} sx={{ marginTop: "2%" }}>
            <CardHeader
              avatar={<Avatar src={post?.profilePicture} />}
              title={<PostHeader post={post} user={user?.username} />}
              subheader={<DatePosted date={post.datePosted} />}
            />

            <Divider variant="middle" />
            <CardContent>
              <Stack>
                <Typography variant="body1">{post?.description}</Typography>
                <Card
                  sx={{
                    mt: "10px",
                    borderRadius: "none",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {post?.media && (
                    <CardContent sx={{ maxWidth: "700px", maxHeight: "500px" }}>
                      {post.media.split("/")[0].split(":")[1] === "image" ? (
                        <img
                          src={post.media}
                          alt="uploaded image"
                          style={{ maxHeight: "400px", maxWidth: "700px" }}
                        />
                      ) : (
                        <video
                          controls
                          src={post.media}
                          alt="uploaded video"
                          style={{ maxHeight: "400px", maxWidth: "700px" }}
                        />
                      )}
                    </CardContent>
                  )}
                </Card>
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
                    {isLiked[post._id] ? (
                      <Button startIcon={<Favorite />} color="error">
                        Liked
                      </Button>
                    ) : (
                      <Button
                        startIcon={<Favorite />}
                        color="inherit"
                        onClick={() => likePost(post)}
                      >
                        Like
                      </Button>
                    )}
                    <Button startIcon={<Comment />} color="inherit">
                      Comment
                    </Button>
                  </Stack>
                  <Stack sx={{ mb: "3px" }}>
                    <Comments comments={post.comments} />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={user?.profilePicture} />
                    <TextField
                      fullWidth
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment..."
                      InputProps={{
                        endAdornment: (
                          <Button
                            onClick={() => commentPost(post._id, user, comment)}
                          >
                            SEND
                          </Button>
                        ),
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
      <LoadMore />
    </Stack>
  );
};

export default MainContent;
