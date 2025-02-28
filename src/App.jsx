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

import ItemDetails from "./pages/ItemDetails";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./store/UserSlice";
import User from "./pages/user/User";
import Default from "./pages/Default";
import Report from "./pages/ProfileFolder/report";

function App() {
  const dispatch = useDispatch()

  const idToken = localStorage.getItem('token')
  const currentUser=async(authtoken)=>{
    try {
      const res = await axios.post(import.meta.env.VITE_API_URI + "/currentUser",{},{headers:{authtoken}})
      console.log('currentUser',res);
      return res
    } catch (error) {
      console.log(error);
    }
  }

  const fetchAndDispatchUser=async()=>{
    if(!idToken){
      console.log('no token in localstorage');
    }
    const userData = await currentUser(idToken)
    if(userData){
      dispatch(
        login({
        email:userData.data.email,
        token:idToken
      }))
      
    }
  }
  
  fetchAndDispatchUser()
  return (
    <div className="min-h-screen">
      

      {/* Routes */}
      <Routes>
        {/* public */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Default />} />
        
        
        {/* private */}
        <Route path="/Home" element={
          <User>
            <Home />
          </User>
          }/>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/NextRegister" element={<NextRegister />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/item/:id" element={<ItemDetails />} />

      </Routes>
    </div>
  );
}

export default App
