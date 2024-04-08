import React from "react";
import { Button, ButtonGroup, Card, CardHeader } from "@mui/material";
import { dummyForums } from "../../dummy-data/dummyData";
import { Add, Visibility } from "@mui/icons-material";
import { Copyright } from "../../pages/LoginPage";
const ForumsContent = () => {
  return (
    <>
      <Card>
        {dummyForums.map((forum, index) => {
          return (
            <Card sx={{ borderRadius: "0" }} key={index}>
              <CardHeader
                title={forum.name}
                subheader={forum.description}
              ></CardHeader>
              <Button endIcon={<Visibility />}>View </Button>
            </Card>
          );
        })}
      </Card>
    </>
  );
};

export default ForumsContent;
