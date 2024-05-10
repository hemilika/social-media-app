import { Card, Grid, Stack } from "@mui/material";
import AccountInfo from "../components/my-account/AccountInfo";
import ContactEmail from "../components/my-account/ContactEmail";
import AccountPassword from "../components/my-account/AccountPassword";
import AccountDelete from "../components/my-account/AccountDelete";
import useGetData from "../hooks/use-get-data";
import OtherInformation from "../components/my-account/OtherInformation";

import { useForm } from "react-hook-form";

const MyAccountPage = () => {
  const { data: user, loading } = useGetData("http://localhost:5000/users");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = useForm();

  if (loading) return <div>Loading user</div>;
  return (
    <Grid container justifyContent="center">
      <Grid item width="80%" padding="30px">
        <Stack spacing={4} alignItems="left">
          <Card sx={{ padding: "50px", borderRadius: "20px" }}>
            <AccountInfo reset={reset} user={user[0]} register={register} />
            <ContactEmail user={user[0]} register={register} />
            <OtherInformation
              user={user[0]}
              register={register}
              setValue={setValue}
            />
            <AccountPassword />
            <AccountDelete isDirty={isDirty} handleSubmit={handleSubmit} />
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MyAccountPage;
