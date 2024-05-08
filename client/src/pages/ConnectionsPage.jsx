import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";
import NewConnections from "../components/connections/NewConnections";
import useGetConnections from "../hooks/use-get-connections";

const ConnectionsPage = () => {
  const { loading, connections } = useGetConnections();

  if (loading) return <div>Loading Connections...</div>;
  return (
    <Grid container spacing={1}>
      <Grid item xs={2.5}>
        <YourConnections connections={connections[0].yourConnections} />
      </Grid>
      <Grid item xs={9}>
        <NewConnections />
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
