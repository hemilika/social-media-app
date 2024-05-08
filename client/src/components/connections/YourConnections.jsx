import { Agriculture, ArrowDownward } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Stack,
  CardHeader,
  Typography,
} from "@mui/material";
import { yourConnections } from "../../dummy-data/dummyData";
const YourConnections = ({ connections }) => {
  console.log(connections);
  return (
    <Stack width="300px" marginTop="4px">
      <Typography>Your Connections</Typography>
      <Stack spacing={2}>
        {connections.map((connection, index) => {
          return (
            <Card
              key={index}
              sx={{ border: "1px solid lightgrey", borderRadius: "10" }}
            >
              <CardHeader
                title={connection.connectedUser.username}
                subheader={`${connection.connectedUser.connections} connections`}
                avatar={
                  <Avatar>
                    <Agriculture />
                  </Avatar>
                }
              />
            </Card>
          );
        })}
      </Stack>
      <Stack paddingTop="10px">
        <Button endIcon={<ArrowDownward />}>Show More</Button>
      </Stack>
    </Stack>
  );
};

export default YourConnections;
