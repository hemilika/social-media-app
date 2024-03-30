import React from "react";
import { Button, ButtonGroup, Card, CardHeader } from "@mui/material";
import { dummyForums } from "../../dummy-data/dummyData";
import { Add, Visibility } from "@mui/icons-material";
const ForumsContent = () => {
  return (
    <Card>
      {dummyForums.map((forum) => {
        return (
          <Card sx={{ borderRadius: "0" }}>
            <CardHeader
              title={forum.name}
              subheader={forum.description}
            ></CardHeader>
            <ButtonGroup size="small" sx={{ ml: "15%", mb: "15px" }}>
              <Button startIcon={<Add />} variant="contained">
                Follow
              </Button>
              <Button endIcon={<Visibility />}>View </Button>
            </ButtonGroup>
          </Card>
        );
      })}
    </Card>
  );
};

export default ForumsContent;
