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
import useLikePost, { useCommentPost } from "../../hooks/use-like-post";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../hooks/AppContext";
import ForumPostHeader from "./ForumPostHeader";
import Comments from "../home-page/Comments";

const MainContentForums = ({ forumPosts, loading }) => {
  const [comment, setComment] = useState("");
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

  const commentForumPost = async (postId, user, comment) => {
    const commentData = {
      comment_message: comment,
      profilePicture: user.profilePicture,
      user: user.username,
    };

    if (comment.length !== 0) {
      const { response } = await useCommentPost(
        `http://localhost:5000/forum-posts/${postId}/comment`,
        commentData
      );
      if (response?.data) {
        optimisticUpdate({ post: response?.data, postType: "forum" });
      }
    }
    setComment("");
  };

  if (loading) return <p>Loading posts...</p>;
  return (
    <Stack spacing={2}>
      <AddForumPost user={user[0]} />
      {forumPosts.length === 0 && (
        <div>
          <p>There are no posts in this forum</p>
          <p>Be the first to post one</p>
        </div>
      )}
      {forumPosts.map((post) => {
        return (
          <Card key={post._id}>
            <CardHeader
              title={<ForumPostHeader forumPost={post} user={user[0]} />}
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
                  <Stack sx={{ mb: "3px" }}>
                    <Comments comments={post.comments} />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      src={user[0]?.profilePicture}
                      sx={{ width: "50px", height: "50px" }}
                    />
                    <TextField
                      fullWidth
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment..."
                      InputProps={{
                        endAdornment: (
                          <Button
                            onClick={() =>
                              commentForumPost(post._id, user[0], comment)
                            }
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
    </Stack>
  );
};

export default MainContentForums;
