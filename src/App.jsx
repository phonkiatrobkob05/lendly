import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Loading from "./pages/Loading";
// import Logintest from "./pages/Logintest";
import Feed from "./pages/Feed";
import Library from "./pages/Library";
import NextRegister from "./pages/NextRegister";
import Navbar from "./components/Navbar";
import Help from "./pages/helpFolder/Help";
import HelpPage1 from "./pages/helpFolder/HelpPage1";
import Report from "./pages/helpFolder/Report";
import Contact from "./pages/helpFolder/Contact";
import Assurance from "./pages/helpFolder/Assurance";

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
        <Route path="/Help" element={<Help />} />
        <Route path="/HelpPage1" element={<HelpPage1 />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Assurance" element={<Assurance />} />
        
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
