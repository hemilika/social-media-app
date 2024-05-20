import { Grid } from "@mui/material";
import ProfileContent from "../components/home-page/ProfileContent";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContent from "../components/home-page/MainContent";
import AddPost from "../components/home-page/AddPost";
import useGetData from "../hooks/use-get-data";
import { useContext, useEffect } from "react";
import { AppContext } from "../hooks/AppContext";

const HomePage = () => {
  const { posts, setPosts } = useContext(AppContext);
  const { data: user, loading: loadingUser } = useGetData(
    "http://localhost:5000/users"
  );
  const { data: postsData, loading } = useGetData(
    "http://localhost:5000/posts"
  );

  useEffect(() => {
    if (postsData) setPosts(postsData);
  }, [postsData]);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={4}
        md={2.5}
        style={{
          position: "sticky",
          top: 80,
          left: 20,
          height: "100vh",
        }}
      >
        <ProfileContent user={user[0]} loading={loadingUser} />
      </Grid>
      <Grid item xs={12} sm={8} md={7} style={{ paddingLeft: "2%" }}>
        <AddPost user={user[0]} />
        <MainContent posts={posts} loading={loading} user={user[0]} />
      </Grid>
      <Grid
        item
        xs={3}
        sm={3}
        md={2.5}
        style={{ position: "absolute", top: 80, right: 20, height: "100vh" }}
      >
        <ForumsContent />
      </Grid>
    </Grid>
  );
};

export default HomePage;
