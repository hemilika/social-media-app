import { Grid, Stack } from "@mui/material";
import AccountInfo from "../components/my-account/AccountInfo";
import ContactEmail from "../components/my-account/ContactEmail";
import AccountPassword from "../components/my-account/AccountPassword";
import AccountDelete from "../components/my-account/AccountDelete";

const MyAccountPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item width="60%" padding="30px">
        <Stack spacing={4} alignItems="left">
          <AccountInfo />
          <ContactEmail />
          <AccountPassword />
          <AccountDelete />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MyAccountPage;
