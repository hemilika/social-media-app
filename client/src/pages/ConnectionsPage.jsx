import { Grid } from "@mui/material";
import YourConnections from "../components/connections/YourConnections";
import NewConnections from "../components/connections/NewConnections";
import useGetData from "../hooks/use-get-data";

const ConnectionsPage = () => {
  const { loading, data: connections } = useGetData(
    "http://localhost:5000/connections"
  );
  const { loading: loadingSuggestions, data: suggestions } = useGetData(
    "http://localhost:5000/suggestions"
  );

  if (loading) return <div>Loading Connections...</div>;
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={2.5}>
        <YourConnections connections={connections} />
      </Grid>
      <Grid item xs={9} md={9}>
        <NewConnections
          loading={loadingSuggestions}
          suggestions={suggestions}
        />
      </Grid>
    </Grid>
  );
};

export default ConnectionsPage;
