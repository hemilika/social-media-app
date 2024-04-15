import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { newConnections } from "../../dummy-data/dummyData";
import { Language } from "@mui/icons-material";
const NewConnections = () => {
  return (
    <>
      <Typography variant="subtitle1">New Connections Suggestions</Typography>
      <Stack spacing={2}>
        {newConnections.map((connection, index) => {
          return (
            <Card key={index}>
              <CardHeader
                title={connection.name}
                subheader={
                  <Stack direction="row" spacing={3}>
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
                    </Stack>
                    <Divider
                      orientation="vertical"
                      sx={{ color: "black", width: "20px", height: "42px" }}
                    />
                    <Stack>
                      <Typography variant="subtitle2" color="GrayText">
                        {connection.field}
                      </Typography>
                      <Typography variant="subtitle2" color="GrayText">
                        {connection.education}
                      </Typography>
                    </Stack>
                    <ButtonGroup size="medium">
                      <Button color="error">Ignore</Button>
                      <Button>Connect</Button>
                    </ButtonGroup>
                  </Stack>
                }
                avatar={<Avatar src={connection.avatar} />}
              />
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default NewConnections;
