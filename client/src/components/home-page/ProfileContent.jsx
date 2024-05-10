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

const ProfileContent = ({ user, loading }) => {
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  return (
    <Stack spacing={5}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ border: "1px solid black" }}
              src={user.profilePicture}
            />
          }
          title={user.fullName}
          subheader={user.jobField}
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
                {user.email}
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
                {user.username}
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
                {`${user.connections} connections`}
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
              <Typography variant="body2">{user.jobField}</Typography>
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
              <Typography variant="body2">{user.education}</Typography>
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="text.secondary">
                Degree
              </Typography>
              <Typography variant="body2">{user.degree}</Typography>
            </Stack>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="text.secondary">
                Interests
              </Typography>
              <Stack alignItems="flex-end">
                {user.interests.map((interest) => {
                  return <Typography variant="body2">{interest}</Typography>;
                })}
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProfileContent;
