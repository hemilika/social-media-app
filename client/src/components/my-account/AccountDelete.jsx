import { Delete, Logout, Save } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useUpdateUser from "../../hooks/use-update-user";

const AccountDelete = ({ uploadedImage, isDirty, handleSubmit }) => {
  const navigate = useNavigate();

  const handleSaveChanges = async (formData) => {
    const updatedData = {
      ...formData,
      profilePicture: uploadedImage || formData.profilePicture,
    };
    console.log(updatedData);
    const { response, error } = await useUpdateUser(updatedData);
    if (response.status === 200) {
      navigate("/home");
    }
  };
  return (
    <Stack>
      <Typography variant="h6">Account Security</Typography>
      <Typography variant="subtitle2" color="GrayText">
        Manage your account security.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        paddingTop="10px"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          <Button
            startIcon={<Logout />}
            variant="contained"
            color="inherit"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Log out
          </Button>
          <Button
            startIcon={<Delete color="error" />}
            color="inherit"
            variant="contained"
          >
            <Typography color="error" variant="button">
              Delete my account
            </Typography>
          </Button>
        </Stack>
        <Button
          startIcon={<Save />}
          variant="contained"
          disabled={!isDirty}
          onClick={handleSubmit(handleSaveChanges)}
        >
          <Typography variant="button">Save Changes</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default AccountDelete;
