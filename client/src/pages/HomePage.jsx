import { Grid } from "@mui/material";
import ProfileContent from "../components/home-page/ProfileContent";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContent from "../components/home-page/MainContent";
import AddPost from "../components/home-page/AddPost";
import useGetPosts from "../hooks/use-get-posts";

const HomePage = () => {
  const { posts, loading } = useGetPosts();

  return (
    <Grid container>
      <Grid
        item
        xs={2.5}
        style={{
          position: "sticky",
          top: 80,
          left: 20,
          height: "100vh",
        }}
      >
        <ProfileContent />
      </Grid>
      <Grid item xs={7.2} style={{ paddingLeft: "2%" }}>
        <AddPost />
        <MainContent posts={posts} loading={loading} />
      </Grid>
      <Grid
        item
        xs={2.5}
        style={{ position: "absolute", top: 80, right: 20, height: "100vh" }}
      >
        <ForumsContent />
      </Grid>
    </Grid>
  );
};

export default HomePage;
