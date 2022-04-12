import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/common/LandingPage";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import SignUp from "./components/common/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
