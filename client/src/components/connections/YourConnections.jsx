import { Agriculture } from "@mui/icons-material";
import { Avatar, Card, CardHeader, Grid, Typography } from "@mui/material";
import { yourConnections } from "../../dummy-data/dummyData";
const YourConnections = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography>Your Connections</Typography>
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
      </Grid>
    </Grid>
  );
};

export default YourConnections;
