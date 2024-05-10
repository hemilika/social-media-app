import { Stack, TextField, Typography } from "@mui/material";

const OtherInformation = ({ user }) => {
  console.log(user);
  return (
    <>
      <Typography variant="h6" sx={{ mt: "5px", mb: "10px" }}>
        Complete Information
      </Typography>
      <Typography variant="subtitle2" color="gray" sx={{ mb: "8px" }}>
        Other Information
      </Typography>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between">
          <TextField
            label="Education"
            sx={{ width: "500px" }}
            defaultValue={user.education}
          />
          <TextField
            label="Job Field"
            sx={{ width: "500px" }}
            defaultValue={user.jobField}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <TextField
            type="number"
            label="Experience"
            sx={{ width: "500px" }}
            defaultValue={user.experience}
          />
          <TextField
            label="Degree"
            sx={{ width: "500px" }}
            defaultValue={user.degree}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default OtherInformation;
