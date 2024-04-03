import { Grid } from "@mui/material";
import ProfileContent from "../components/home-page/ProfileContent";
import ForumsContent from "../components/home-page/ForumsContent";
import MainContent from "../components/home-page/MainContent";
import AddPost from "../components/home-page/AddPost";

const HomePage = () => {
  return (
    <Grid container style={{ position: "relative" }}>
      <Grid
        item
        xs={3}
        style={{ position: "absolute", top: 10, left: 10, height: "100vh" }}
      >
        <ProfileContent />
      </Grid>
      <Grid
        item
        xs={3}
        style={{ position: "absolute", top: 10, right: 10, height: "100vh" }}
      >
        <ForumsContent />
      </Grid>

      <Grid item xs={12} style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <AddPost />
        <MainContent />
      </Grid>
    </Grid>
  );
};

export default HomePage;
