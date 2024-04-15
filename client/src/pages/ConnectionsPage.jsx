import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";
import NewConnections from "../components/connections/NewConnections";

const ConnectionsPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2.5}>
        <YourConnections />
      </Grid>
      <Grid item xs={9}>
        <NewConnections />
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
