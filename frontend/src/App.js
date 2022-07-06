import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { HomePage } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
