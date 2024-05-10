import { Grid } from "@mui/material";
import ProfileContent from "../components/home-page/ProfileContent";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContent from "../components/home-page/MainContent";
import AddPost from "../components/home-page/AddPost";
import useGetData from "../hooks/use-get-data";

const HomePage = () => {
  const { data: user, loading: loadingUser } = useGetData(
    "http://localhost:5000/users"
  );
  const { data: posts, loading } = useGetData("http://localhost:5000/posts");

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
        <ProfileContent user={user[0]} loading={loadingUser} />
      </Grid>
      <Grid item xs={7.2} style={{ paddingLeft: "2%" }}>
        <AddPost profile={user[0]?.profilePicture} />
        <MainContent
          posts={posts}
          loading={loading}
          profile={user[0]?.profilePicture}
        />
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
