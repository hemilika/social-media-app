import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";
import NewConnections from "../components/connections/NewConnections";
import useGetConnections from "../hooks/use-get-connections";
import useGetSuggestions from "../hooks/use-get-suggestions";

const ConnectionsPage = () => {
  const { loading, connections } = useGetConnections();
  const { loading: loadingSuggestions, suggestions } = useGetSuggestions();

  if (loading) return <div>Loading Connections...</div>;
  return (
    <Grid container spacing={1}>
      <Grid item xs={2.5}>
        <YourConnections connections={connections} />
      </Grid>
      <Grid item xs={9}>
        <NewConnections
          loading={loadingSuggestions}
          suggestions={suggestions}
        />
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
