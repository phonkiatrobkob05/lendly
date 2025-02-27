import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logintest from "./pages/Logintest";
import NextRegister from "./pages/NextRegister";

function App() {
  return (
    <div className="min-h-screen">
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/NextRegister" element={<NextRegister />} />
        
      </Routes>
    </div>
  );
}

export default App;
