import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import ConnectionsPage from "./pages/ConnectionsPage";
import ForumsPage from "./pages/ForumsPage";
import MyAccountPage from "./pages/MyAccountPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import "./pageStyle.css";
import ProtectedRoute from "./ProtectedRoute";
import SpecificForumPage from "./pages/SpecificForumPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<Navbar />}>
          <Route
            path="/home"
            element={<ProtectedRoute element={<HomePage />} />}
          />
          <Route
            path="/connections"
            element={<ProtectedRoute element={<ConnectionsPage />} />}
          />
          <Route
            path="/forums"
            element={<ProtectedRoute element={<ForumsPage />} />}
          />
          <Route
            path="/forums/:name"
            element={<ProtectedRoute element={<SpecificForumPage />} />}
          />
          <Route
            path="/account"
            element={<ProtectedRoute element={<MyAccountPage />} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
