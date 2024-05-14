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

const MainContentForums = () => {
  return (
    <Card>
      <CardHeader title="JavaScript Forum" subheader="Posted by: user1" />
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
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
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
};

export default MainContentForums;
