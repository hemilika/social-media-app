import React from "react";
import { Button, Card, CardHeader, Stack, Typography } from "@mui/material";
import { ArrowRightAlt, Visibility } from "@mui/icons-material";
const ForumsContent = ({ loading, forums }) => {
  if (loading) return <div>Loading Forums...</div>;
  return (
    <Stack alignItems="center">
      <Card>
        <Typography variant="subtitle1" sx={{ ml: "25%" }}>
          Explore Forums
        </Typography>
        {forums.map((forum, index) => {
          return (
            <Card sx={{ borderRadius: "0" }} key={index}>
              <CardHeader
                title={forum.forumName}
                subheader={forum.forumDescription}
              />
              <Typography
                variant="subtitle2"
                color="GrayText"
                sx={{ marginLeft: "18px", marginTop: "-10px" }}
              >
                Members: {forum.forumMembers}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                marginBottom="5px"
              >
                <Button endIcon={<Visibility />}>View </Button>
                <Button endIcon={<ArrowRightAlt />}>Join </Button>
              </Stack>
            </Card>
          );
        })}
      </Card>
    </Stack>
  );
};

export default ForumsContent;
