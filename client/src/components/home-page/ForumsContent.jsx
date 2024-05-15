import React from "react";
import { Button, Card, CardHeader, Stack, Typography } from "@mui/material";
import { ArrowRightAlt, Visibility } from "@mui/icons-material";
import useGetData from "../../hooks/use-get-data";
import { useLocation, useNavigate } from "react-router-dom";

const ForumsContent = () => {
  const { data: forums, loading } = useGetData("http://localhost:5000/forums");

  const navigate = useNavigate();
  const location = useLocation();

  if (loading) return <div>Loading Forums...</div>;

  return (
    <Stack alignItems="center">
      <Card>
        <Typography variant="subtitle1" sx={{ ml: "25%" }}>
          Explore Forums
        </Typography>
        {forums.map((forum, index) => {
          return (
            <Card sx={{ borderRadius: "0", minWidth: "200px" }} key={index}>
              <CardHeader
                title={forum.forumName}
                subheader={forum.forumDescription}
              />
              {forum?.technologies?.length > 0 ? (
                <Typography
                  variant="subtitle2"
                  color="GrayText"
                  sx={{ marginLeft: "18px", marginTop: "-10px" }}
                >
                  Technologies:{" "}
                  <Stack>
                    {forum?.technologies?.map((tech, index) => (
                      <div key={index}>
                        {index + 1} - {tech}
                      </div>
                    ))}
                  </Stack>
                </Typography>
              ) : null}

              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                marginBottom="5px"
              >
                <Button endIcon={<Visibility />}>View </Button>
              </Stack>
            </Card>
          );
        })}
      </Card>
      {location.pathname == "/home" ? (
        <Stack
          direction="row"
          spacing={1}
          mt="10px"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/forums")}
        >
          <Typography>Go to forums</Typography>
          <ArrowRightAlt />
        </Stack>
      ) : null}
    </Stack>
  );
};

export default ForumsContent;
