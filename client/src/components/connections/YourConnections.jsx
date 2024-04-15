import { Agriculture, ArrowRightAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Stack,
  CardHeader,
  Typography,
} from "@mui/material";
import { yourConnections } from "../../dummy-data/dummyData";
const YourConnections = () => {
  return (
    <Stack width="350px">
      <Typography>Your Connections</Typography>
      <Stack spacing={2}>
        {yourConnections.map((connection, index) => {
          return (
            <Card
              key={index}
              sx={{ border: "1px solid lightgrey", borderRadius: "0" }}
            >
              <CardHeader
                title={connection.name}
                subheader={connection.connections}
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
      <Stack item>
        <Button endIcon={<ArrowRightAlt />}>Show All Connections</Button>
      </Stack>
    </Stack>
  );
};

export default YourConnections;
