import { ArrowDownward } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Stack,
  CardHeader,
  Typography,
} from "@mui/material";
export const NameUsername = ({ user }) => {
  return (
    <Stack direction="row">
      <Typography variant="subtitle2">{user.fullName}</Typography>
      &nbsp;{" - "} &nbsp;
      <Typography variant="subtitle2" fontWeight="bold">
        {user.username}
      </Typography>
    </Stack>
  );
};
const YourConnections = ({ connections }) => {
  return (
    <Stack width="300px" marginTop="4px">
      <Typography>Your Connections</Typography>
      {connections.length === 0 ? (
        <p>You have no connections</p>
      ) : (
        <Stack spacing={2}>
          {connections.map((connection, index) => {
            return (
              <Card
                key={index}
                sx={{ border: "1px solid lightgrey", borderRadius: "10" }}
              >
                <CardHeader
                  title={<NameUsername user={connection} />}
                  subheader={`${connection.connections} connections`}
                  avatar={<Avatar src={connection?.profilePicture} />}
                />
              </Card>
            );
          })}
        </Stack>
      )}
      <Stack paddingTop="10px">
        <Button endIcon={<ArrowDownward />}>Show More</Button>
      </Stack>
    </Stack>
  );
};

export default YourConnections;
