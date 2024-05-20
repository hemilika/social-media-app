import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContentForums from "../components/forum/MainContentForums";
import useGetData from "../hooks/use-get-data";
import { AppContext } from "../hooks/AppContext";
import { useParams } from "react-router-dom";

const SpecificForumPage = () => {
  const params = useParams();
  const { forumPosts, setForumPosts } = useContext(AppContext);
  const { data, loading } = useGetData(
    "http://localhost:5000/forum-posts",
    params.name
  );

  useEffect(() => {
    if (data) setForumPosts(data);
  }, [data]);

  return (
    <Grid padding="20px">
      <Grid item xs={12}>
        <MainContentForums forumPosts={forumPosts} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default SpecificForumPage;
