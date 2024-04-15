import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";

const LoadMore = () => {
  return (
    <div
      style={{
        paddingBottom: "200px",
        paddingTop: "60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button endIcon={<Refresh />}>LOAD MORE POSTS</Button>
    </div>
  );
};

export default LoadMore;
