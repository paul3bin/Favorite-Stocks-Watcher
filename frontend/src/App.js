import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { Login } from "./pages/UserLogin";
import { SignUp } from "./pages/SignUp";
import { HomePage } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { ChangePassword } from "./pages/ChangePassword";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
