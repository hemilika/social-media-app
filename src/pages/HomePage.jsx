import { Grid } from "@mui/material";
import ProfileContent from "../layout/page-content/ProfileContent";
import ForumsContent from "../layout/page-content/ForumsContent";
import MainContent from "../layout/page-content/MainContent";
import AddPost from "../layout/page-content/AddPost";

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
