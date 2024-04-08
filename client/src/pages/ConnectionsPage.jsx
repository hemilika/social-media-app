import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";
import NewConnections from "../components/connections/NewConnections";

const ConnectionsPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <YourConnections />
      </Grid>
      <Grid item xs={6}>
        <NewConnections />
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
