import { Grid } from "@mui/material";
import React from "react";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContentForums from "../components/forum/MainContentForums";
import useGetData from "../hooks/use-get-data";

const ForumsPage = () => {
  const { data: forums, loading: loadingForums } = useGetData(
    "http://localhost:5000/forums"
  );

  return (
    <Grid container>
      <Grid item xs={9.5} paddingLeft="20px" paddingTop="20px">
        <MainContentForums />
      </Grid>
      <Grid item xs={2.5}>
        <ForumsContent forums={forums} loading={loadingForums} />
      </Grid>
    </Grid>
  );
};

export default ForumsPage;
