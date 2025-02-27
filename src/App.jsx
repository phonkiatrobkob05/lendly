import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Loading from "./pages/Loading";
// import Logintest from "./pages/Logintest";
import NextRegister from "./pages/NextRegister";
import Navbar from "./components/Navbar";
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
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Loading" element={<Loading />} />
        
      </Routes>
    </div>
  );
}

export default App;
