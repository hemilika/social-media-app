import { useEffect, useState } from "react";
import { Stack, TextField, Typography, Autocomplete } from "@mui/material";
import { interests } from "./interests";
const OtherInformation = ({ user, register, setValue }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestsChange = (event, newValue) => {
    setSelectedInterests(newValue);
    setValue("interests", newValue);
  };

  useEffect(() => {
    if (user.interests) {
      setSelectedInterests(user.interests);
    }
  }, []);

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
            {...register("education")}
            label="Education"
            sx={{ width: "500px" }}
            defaultValue={user.education}
          />
          <TextField
            {...register("jobField")}
            label="Job Field"
            sx={{ width: "500px" }}
            defaultValue={user.jobField}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <TextField
            {...register("experience")}
            type="number"
            label="Experience"
            sx={{ width: "500px" }}
            defaultValue={user.experience}
          />
          <TextField
            {...register("degree")}
            label="Degree"
            sx={{ width: "500px" }}
            defaultValue={user.degree}
          />
        </Stack>
        <Autocomplete
          {...register("interests")}
          multiple
          disablePortal
          options={interests}
          value={selectedInterests}
          onChange={handleInterestsChange}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Interests" />}
        />
      </Stack>
    </>
  );
};

export default OtherInformation;
