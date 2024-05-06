import { Grid } from "@mui/material";
import React from "react";
import MyForums from "../components/forum/MyForums";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContentForums from "../components/forum/MainContentForums";

const ForumsPage = () => {
  return (
    <Grid container>
      <Grid item xs={2.5}>
        <MyForums />
      </Grid>
      <Grid item xs={7} paddingLeft={"35px"}>
        <MainContentForums />
      </Grid>
      <Grid item xs={2.5}>
        <ForumsContent />
      </Grid>
    </Grid>
  );
};

export default ForumsPage;
