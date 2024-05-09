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
import mandi from "../../assets/mandi.png";
import panda from "../../assets/panda.webp";
import LoadMore from "./LoadMore";
import DatePosted from "./DatePosted";
import Comments from "./Comments";
const MainContent = ({ posts, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Stack>
      {posts?.map((post) => {
        return (
          <Card key={post._id} sx={{ marginTop: "2%" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                  <img src={mandi} alt="" width="80px" height="80px" />
                </Avatar>
              }
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
                  <img src={post.media} alt="Couldn't load image" />
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
                    <Avatar>
                      <img src={panda} alt="" width="100" height="100" />
                    </Avatar>
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
