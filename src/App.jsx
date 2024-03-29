import { Stack } from "@mui/material";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./pageStyle.css";
const App = () => {
  return (
    <Stack direction="column" spacing={5}>
      <Navbar />
      <HomePage />
    </Stack>
  );
};

export default App;
