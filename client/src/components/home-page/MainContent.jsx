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
import {
  Comment,
  EmojiEmotions,
  Favorite,
  Sync,
  Textsms,
} from "@mui/icons-material";
import mandi from "../../assets/mandi.png";
import kalaja from "../../assets/kalaja.jpg";
import panda from "../../assets/panda.webp";
import LoadMore from "./LoadMore";
import { Copyright } from "../../pages/LoginPage";
const MainContent = () => {
  return (
    <Stack>
      <Card sx={{ marginTop: "2%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
              <img src={mandi} alt="" width="80px" height="80px" />
            </Avatar>
          }
          title="Mandi Nishtulles"
          subheader="March 14, 2024"
        ></CardHeader>
        <Divider variant="middle" />
        <CardContent>
          <Stack>
            <Typography variant="body1">
              Me vllain tim Muharrem Ahmeti Tallava Gon Kalaja ZJARRRRRRRRR
            </Typography>
            <Card
              sx={{
                mt: "10px",
                borderRadius: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={kalaja} alt="" />
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
                  15
                </IconButton>
                <IconButton size="small">
                  <Textsms color="primary" />2
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
                <Button startIcon={<Sync />} color="inherit">
                  Repost
                </Button>
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
      <Card sx={{ marginTop: "2%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
              <img src={mandi} alt="" width="80px" height="80px" />
            </Avatar>
          }
          title="Mandi Nishtulles"
          subheader="March 14, 2024"
        ></CardHeader>
        <Divider variant="middle" />
        <CardContent>
          <Stack>
            <Typography variant="body1">
              Me vllain tim Muharrem Ahmeti Tallava Gon Kalaja ZJARRRRRRRRR
            </Typography>
            <Card
              sx={{
                mt: "10px",
                borderRadius: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={kalaja} alt="" />
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
                  15
                </IconButton>
                <IconButton size="small">
                  <Textsms color="primary" />2
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
                <Button startIcon={<Sync />} color="inherit">
                  Repost
                </Button>
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
      <Card sx={{ marginTop: "2%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
              <img src={mandi} alt="" width="80px" height="80px" />
            </Avatar>
          }
          title="Mandi Nishtulles"
          subheader="March 14, 2024"
        ></CardHeader>
        <Divider variant="middle" />
        <CardContent>
          <Stack>
            <Typography variant="body1">
              Me vllain tim Muharrem Ahmeti Tallava Gon Kalaja ZJARRRRRRRRR
            </Typography>
            <Card
              sx={{
                mt: "10px",
                borderRadius: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={kalaja} alt="" />
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
                  15
                </IconButton>
                <IconButton size="small">
                  <Textsms color="primary" />2
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
                <Button startIcon={<Sync />} color="inherit">
                  Repost
                </Button>
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
      <LoadMore />
      <Copyright />
    </Stack>
  );
};

export default MainContent;
