import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import panda from "../../../public/panda.webp";
const ProfileContent = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ border: "1px solid black" }}>
            <img src={panda} alt="Logo" width="100" height="100" />
          </Avatar>
        }
        title="Hemi Lika"
        subheader="Software Developer"
      ></CardHeader>
      <Divider variant="fullWidth" />
      <CardContent>
        <Stack spacing={1}>
          <Stack justifyContent="space-between" direction="row" spacing={5}>
            <Typography variant="body2" color="text.secondary">
              Email
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              hemibobi11@gmail.com
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" direction="row" spacing={5}>
            <Typography variant="body2" color="text.secondary">
              Username
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              hemi11
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ mt: "8px", mb: "8px" }} />
        <Stack spacing={1}>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body2" color="text.secondary">
              Connections
            </Typography>
            <Typography variant="body2" color="primary">
              17
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body2" color="text.secondary">
              Forums
            </Typography>
            <Typography variant="body2" color="primary">
              2
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileContent;
