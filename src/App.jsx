import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Library from "./pages/Library";
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
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
