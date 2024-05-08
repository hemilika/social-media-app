import { Grid } from "@mui/material";
import React from "react";
import MyForums from "../components/forum/MyForums";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContentForums from "../components/forum/MainContentForums";
import useGetForums from "../hooks/use-get-forums";

const ForumsPage = () => {
  const { forums, loading: loadingForums } = useGetForums();

  return (
    <Grid container>
      <Grid item xs={2.5}>
        <MyForums />
      </Grid>
      <Grid item xs={7} paddingLeft={"35px"}>
        <MainContentForums />
      </Grid>
      <Grid item xs={2.5}>
        <ForumsContent forums={forums} loading={loadingForums} />
      </Grid>
    </Grid>
  );
};

export default ForumsPage;
