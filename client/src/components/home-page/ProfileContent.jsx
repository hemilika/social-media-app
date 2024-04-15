import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import panda from "../../assets/panda.webp";

const ProfileContent = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={5}>
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
                onClick={() => navigate("/account")}
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
                onClick={() => navigate("/account")}
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
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/connections")}
              >
                17
              </Typography>
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="text.secondary">
                Forums
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                2
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack spacing={1}>
            <Stack justifyContent="space-between" direction="row" spacing={5}>
              <Typography variant="body2" color="text.secondary">
                Job Field
              </Typography>
              <Typography variant="body2">FullStack Developer</Typography>
            </Stack>
            <Stack justifyContent="space-between" direction="row" spacing={5}>
              <Typography variant="body2" color="text.secondary">
                Experience
              </Typography>
              <Typography variant="body2">5+ years</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mt: "8px", mb: "8px" }} />
          <Stack spacing={1}>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="text.secondary">
                Education
              </Typography>
              <Typography variant="body2">UET</Typography>
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="text.secondary">
                Degree
              </Typography>
              <Typography variant="body2">Bachelor</Typography>
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="text.secondary">
                Interests
              </Typography>
              <Stack alignItems="flex-end">
                <Typography variant="body2">NodeJS</Typography>
                <Typography variant="body2">Backend Architecture</Typography>
                <Typography variant="body2">Advanced React</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProfileContent;
