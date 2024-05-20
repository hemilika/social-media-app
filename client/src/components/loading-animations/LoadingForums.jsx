import { Skeleton, Stack } from "@mui/material";
import React from "react";

const LoadingForums = () => {
  return (
    <Stack>
      <Skeleton variant="rectangular" height="500px"></Skeleton>
    </Stack>
  );
};

export default LoadingForums;
