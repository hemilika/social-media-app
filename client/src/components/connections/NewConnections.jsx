import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { newConnections } from "../../dummy-data/dummyData";
import { ArrowDownward, Language } from "@mui/icons-material";
const NewConnections = () => {
  return (
    <>
      <Typography variant="subtitle1">New Connections Suggestions</Typography>
      <Grid container spacing={1}>
        {newConnections.map((connection, index) => {
          return (
            <Grid item key={index} xs={12} md={6}>
              <Card>
                <CardHeader
                  title={connection.name}
                  subheader={
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Stack width="25%">
                        <Typography variant="subtitle2" color="GrayText">
                          {connection.connections}
                        </Typography>
                        <Stack direction="row" alignItems="center">
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
                      <ButtonGroup sx={{ height: "30px", width: "160px" }}>
                        <Button color="error">Ignore</Button>
                        <Button>Connect</Button>
                      </ButtonGroup>
                    </Stack>
                  }
                  avatar={
                    <Avatar
                      src={connection.avatar}
                      sx={{ width: "60px", height: "60px" }}
                    />
                  }
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Button endIcon={<ArrowDownward />} sx={{ mt: "10px" }}>
        Show More
      </Button>
    </>
  );
};

export default NewConnections;
