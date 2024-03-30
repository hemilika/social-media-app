import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <TextField
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="filled"
      sx={{
        borderRadius: "20px", // Adjust border radius as needed
        "& .MuiFilledInput-input": {
          paddingTop: "8px", // Adjust as needed for vertical alignment
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#f0f0f0", // Custom background color
        },
        "& .MuiSvgIcon-root": {
          marginBottom: "13px",
        },
      }}
    />
  );
};

export default SearchBar;
