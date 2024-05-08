import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ConnectionsPage from "./pages/ConnectionsPage";
import "./pageStyle.css";
import ForumsPage from "./pages/ForumsPage";
import MyAccountPage from "./pages/MyAccountPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
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
