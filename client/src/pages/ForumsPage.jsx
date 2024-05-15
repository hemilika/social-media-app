import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContentForums from "../components/forum/MainContentForums";
import useGetData from "../hooks/use-get-data";
import { AppContext } from "../hooks/AppContext";

const ForumsPage = () => {
  const { forumPosts, setForumPosts } = useContext(AppContext);
  const { data, loading } = useGetData("http://localhost:5000/forum-posts");

  const { data: forums, loading: loadingForums } = useGetData(
    "http://localhost:5000/forums"
  );

  useEffect(() => {
    if (data) setForumPosts(data);
  }, [data]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={9.5}>
        <MainContentForums forumPosts={forumPosts} loading={loading} />
      </Grid>
      <Grid item xs={2.5}>
        <ForumsContent forums={forums} loading={loadingForums} />
      </Grid>
    </Grid>
  );
};

export default ForumsPage;
