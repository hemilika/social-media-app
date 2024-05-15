import { PermMedia } from "@mui/icons-material";
import { Button, Typography, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
const AddImage = ({ setUploadedImage }) => {
  const location = useLocation();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Button
      startIcon={<PermMedia />}
      variant={location.pathname === "/account" ? "contained" : "text"}
      component="label"
    >
      <Typography
        variant="button"
        color={location.pathname === "/account" ? "white" : "black"}
        fontFamily="unset"
      >
        {location.pathname === "/account" ? "Upload profile picture" : "Media"}
      </Typography>
      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </Button>
  );
};

export default AddImage;
