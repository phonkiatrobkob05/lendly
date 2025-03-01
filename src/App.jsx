import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/ProfileFolder/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Loading from "./pages/Loading";
import Feed from "./pages/Feed";
import Library from "./pages/Library";
import NextRegister from "./pages/NextRegister";
import Navbar from "./components/Navbar";
import Help from "./pages/helpFolder/Help";
import HelpPage1 from "./pages/helpFolder/HelpPage1";
import Contact from "./pages/helpFolder/Contact";
import Report from "./pages/helpFolder/Report";
import React from "react";
import ItemDetails from "./pages/ItemDetails";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./store/UserSlice";
import User from "./pages/user/User";
import Default from "./pages/Default";
import ProfileReport from "./pages/ProfileFolder/ProfileReport";

function App() {
  const dispatch = useDispatch();

  const idToken = localStorage.getItem("token");
  const currentUser = async (authtoken) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URI + "/currentUser",
        {},
        { headers: { authtoken } }
      );
      console.log("currentUser", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAndDispatchUser = async () => {
    if (!idToken) {
      console.log("no token in localstorage");
    }
    const userData = await currentUser(idToken);
    if (userData) {
      dispatch(
        login({
          email: userData.data.email,
          studentID:userData.data.studentID,
          fullName:userData.data.fullName,
          faculty:userData.data.faculty,
          token: idToken,
        })
      );
      
    }
  };

  fetchAndDispatchUser();
  return (
    <div className="min-h-screen">
      {/* Routes */}
      <Routes>
        {/* public */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Default />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/HelpPage1" element={<HelpPage1 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Loading" element={<Loading />} />

        {/* private */}
        <Route
          path="/"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/Report"
          element={
            <User>
              <Report />
            </User>
          }
        />
        <Route
          path="/Profile"
          element={
            <User>
              <Profile />
            </User>
          }
        />
        <Route
          path="/ProfileReport"
          element={
            <User>
              <ProfileReport />
            </User>
          }
        />
        <Route path="/Navbar" element={
          <User>
            <Navbar />
          </User>
        } />
        <Route path="/Feed" element={
          <User>
            <Feed />
          </User>
        } />
        <Route path="/Library" element={
          <User>
            <Library />
          </User>
        } />
        <Route path="/item/:id" element={
          <User>
            <ItemDetails />
          </User>
        } />
      </Routes>
    </div>
  );
}

export default App;
