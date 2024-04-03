import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";

const ConnectionsPage = () => {
  return (
    <Grid container>
      <Grid item>
        <YourConnections />;
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
