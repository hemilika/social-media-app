import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../hooks/AppContext";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const { setSearchValue } = useContext(AppContext);

  const location = useLocation();

  const getPlaceholderValue = useCallback(() => {
    switch (location.pathname) {
      case "/home":
        return "Search for a post";
      case "/connections":
        return "Search for a user";
      case "/forums":
        return "Search for a forum";
      default:
        return "Search";
    }
  }, [location.pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchValue(searchBarValue);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchBarValue]);

  return (
    <TextField
      value={searchBarValue}
      placeholder={getPlaceholderValue()}
      onChange={(e) => setSearchBarValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="filled"
      sx={{
        borderRadius: "20px",
        "& .MuiFilledInput-input": {
          paddingTop: "8px",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#f0f0f0",
        },
        "& .MuiSvgIcon-root": {
          marginBottom: "13px",
        },
      }}
    />
  );
};

export default SearchBar;
