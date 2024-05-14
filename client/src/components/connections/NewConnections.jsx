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
import {
  ArrowDownward,
  Computer,
  Language,
  People,
  School,
} from "@mui/icons-material";
import { NameUsername } from "./YourConnections";
import useAddConnection from "../../hooks/use-add-connection";
import { useState } from "react";
const NewConnections = ({ loading, suggestions }) => {
  const [connectedMap, setConnectedMap] = useState({});

  const handleAddConnection = async (connection, connectionId) => {
    const { response, err } = await useAddConnection(connection);
    if (response.status === 200) {
      setConnectedMap((prevMap) => ({
        ...prevMap,
        [connectionId]: true,
      }));
    }
  };

  if (loading) return <div>Loading suggestions...</div>;
  return (
    <>
      <Typography variant="subtitle1">New Connections Suggestions</Typography>
      <Grid container spacing={1}>
        {suggestions.map((connection, index) => {
          console.log(connection);
          const connectionId = connection._id.toString();
          const isConnected = connectedMap[connectionId];
          return (
            <Grid item key={index} xs={12} md={6}>
              <Card>
                <CardHeader
                  title={<NameUsername user={connection} />}
                  subheader={
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Stack width="25%">
                        <Typography variant="subtitle2" color="GrayText">
                          <Stack direction="row" alignItems={"center"}>
                            <People sx={{ mr: "5px" }} />
                            {`${connection.connections.length} connections`}
                          </Stack>
                        </Typography>
                        <Stack direction="row" alignItems="center">
                          <Language />
                          <Typography variant="subtitle2" color="GrayText">
                            {new Date(
                              connection.dateJoined
                            ).toLocaleDateString()}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Divider
                        orientation="vertical"
                        sx={{ color: "black", width: "20px", height: "42px" }}
                      />
                      <Stack>
                        <Typography variant="subtitle2" color="GrayText">
                          <Stack direction="row" alignItems="center">
                            <Computer sx={{ mr: "5px" }} />
                            {connection.jobField}
                          </Stack>
                        </Typography>
                        <Typography variant="subtitle2" color="GrayText">
                          <Stack direction="row" alignItems="center">
                            <School sx={{ mr: "5px" }} />
                            {connection.education}
                          </Stack>
                        </Typography>
                      </Stack>

                      <Stack sx={{ ml: "30px" }}>
                        {isConnected ? (
                          <Typography>Already Connected</Typography>
                        ) : (
                          <Button
                            size="small"
                            onClick={() =>
                              handleAddConnection(connection, connection._id)
                            }
                          >
                            Connect
                          </Button>
                        )}
                      </Stack>
                    </Stack>
                  }
                  avatar={
                    <Avatar
                      src={connection?.profilePicture}
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
