import { Divider, Stack, TextField, Typography } from "@mui/material";

const Username = ({ register, user }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Username</Typography>
      <Stack direction="row" justifyContent="space-between">
        <TextField
          {...register("username")}
          defaultValue={user.username}
          label="Username"
        />
      </Stack>
      <Divider />
    </Stack>
  );
};

export default Username;
