import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { newConnections } from "../../dummy-data/dummyData";
import { Language } from "@mui/icons-material";
const NewConnections = () => {
  return (
    <>
      <Typography>New Connections</Typography>
      <Stack spacing={2}>
        {newConnections.map((connection, index) => {
          return (
            <Card key={index}>
              <CardHeader
                title={connection.name}
                subheader={
                  <Stack direction="row">
                    <Stack>
                      <Typography variant="subtitle2" color="GrayText">
                        {connection.connections}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Language />
                        <Typography variant="subtitle2" color="GrayText">
                          {connection.date_joined}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack>
                        <Typography variant="subtitle2" color="GrayText">
                          {connection.field}
                        </Typography>
                        <Typography variant="subtitle2" color="GrayText">
                          {connection.education}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                }
                avatar={<Avatar src={connection.avatar} />}
              />
              <CardContent>
                <Typography>{connection.field}</Typography>
                <Typography>{connection.education}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default NewConnections;
