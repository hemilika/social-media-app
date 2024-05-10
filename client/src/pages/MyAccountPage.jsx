import { Card, Grid, Stack } from "@mui/material";
import AccountInfo from "../components/my-account/AccountInfo";
import ContactEmail from "../components/my-account/ContactEmail";
import AccountPassword from "../components/my-account/AccountPassword";
import AccountDelete from "../components/my-account/AccountDelete";
import useGetData from "../hooks/use-get-data";
import OtherInformation from "../components/my-account/OtherInformation";

const MyAccountPage = () => {
  const { data: user, loading } = useGetData("http://localhost:5000/users");
  if (loading) return <div>Loading user</div>;
  return (
    <Grid container justifyContent="center">
      <Grid item width="80%" padding="30px">
        <Stack spacing={4} alignItems="left">
          <Card sx={{ padding: "50px", borderRadius: "20px" }}>
            <AccountInfo user={user[0]} />
            <ContactEmail user={user[0]} />
            <OtherInformation user={user[0]} />
            <AccountPassword user={user[0]} />
            <AccountDelete />
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MyAccountPage;
