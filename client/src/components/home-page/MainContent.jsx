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
  InputAdornment,
} from "@mui/material";
import { Comment, EmojiEmotions, Favorite, Textsms } from "@mui/icons-material";
import LoadMore from "./LoadMore";
import DatePosted from "./DatePosted";
import Comments from "./Comments";
const MainContent = ({ posts, loading, profile }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Stack>
      {posts?.map((post) => {
        return (
          <Card key={post._id} sx={{ marginTop: "2%" }}>
            <CardHeader
              avatar={<Avatar src={post.profilePicture} />}
              title={post.posterUsername}
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
                  <CardContent sx={{ maxWidth: "700px", maxHeight: "500px" }}>
                    <img
                      src={post.media}
                      alt="Couldn't load image"
                      width="700px"
                    />
                  </CardContent>
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
                    <Button startIcon={<Favorite />} color="inherit">
                      Like
                    </Button>
                    <Button startIcon={<Comment />} color="inherit">
                      Comment
                    </Button>
                  </Stack>
                  <Stack sx={{ mb: "3px" }}>
                    <Comments comments={post.comments} />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={profile} />
                    <TextField
                      fullWidth
                      placeholder="Add a comment..."
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmojiEmotions color="inherit" />
                          </InputAdornment>
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
