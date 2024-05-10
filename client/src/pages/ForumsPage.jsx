import { Grid } from "@mui/material";
import React from "react";
import MyForums from "../components/forum/MyForums";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContentForums from "../components/forum/MainContentForums";
import useGetData from "../hooks/use-get-data";

const ForumsPage = () => {
  const { data: forums, loading: loadingForums } = useGetData(
    "http://localhost:5000/forums"
  );

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
