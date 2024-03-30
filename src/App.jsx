import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ConnectionsPage from "./pages/ConnectionsPage";
import "./pageStyle.css";
import ForumsPage from "./pages/ForumsPage";
import MyAccountPage from "./pages/MyAccountPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/connections" element={<ConnectionsPage />} />
          <Route path="/forums" element={<ForumsPage />} />
          <Route path="/account" element={<MyAccountPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
