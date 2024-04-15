import { Card, Grid, Stack } from "@mui/material";
import AccountInfo from "../components/my-account/AccountInfo";
import ContactEmail from "../components/my-account/ContactEmail";
import AccountPassword from "../components/my-account/AccountPassword";
import AccountDelete from "../components/my-account/AccountDelete";

const MyAccountPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item width="80%" padding="30px">
        <Stack spacing={4} alignItems="left">
          <Card sx={{ padding: "50px", borderRadius: "20px" }}>
            <AccountInfo />
            <ContactEmail />
            <AccountPassword />
            <AccountDelete />
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MyAccountPage;
