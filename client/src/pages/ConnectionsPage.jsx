import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";
import NewConnections from "../components/connections/NewConnections";
import ForumsContent from "../components/home-page/ForumsContent";

const ConnectionsPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <YourConnections />
      </Grid>
      <Grid item xs={6}>
        <NewConnections />
      </Grid>
      <Grid item xs={3}>
        <ForumsContent />
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
