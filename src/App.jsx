import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
