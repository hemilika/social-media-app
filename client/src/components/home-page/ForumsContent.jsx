import React from "react";
import { Button, Card, CardHeader, Stack, Typography } from "@mui/material";
import { dummyForums } from "../../dummy-data/dummyData";
import { ArrowRightAlt, Visibility } from "@mui/icons-material";
const ForumsContent = () => {
  return (
    <Stack alignItems="center">
      <Typography variant="subtitle1">Explore Forums</Typography>
      <Card>
        {dummyForums.map((forum, index) => {
          return (
            <Card sx={{ borderRadius: "0" }} key={index}>
              <CardHeader
                title={forum.name}
                subheader={forum.description}
              ></CardHeader>
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
