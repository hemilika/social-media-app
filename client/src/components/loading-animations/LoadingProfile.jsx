import { Skeleton, Stack } from "@mui/material";
import React from "react";

const LoadingProfile = () => {
  return (
    <Stack>
      <Skeleton variant="rectangular" height="200px"></Skeleton>
      <Skeleton variant="rectangular" height="150px"></Skeleton>
    </Stack>
  );
};

export default LoadingProfile;
