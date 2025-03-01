import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const User = ({children}) => {
    const {user} = useSelector((state)=>({...state}))
    const navigate = useNavigate()
    console.log('userRoute',user);

    useEffect(()=>{
      if(!user || !user.user.token){
      navigate('/login',{ replace: true })
    }
    },[user,navigate])

    if (!user || !user.user.token) {
      return null; 
  }
  
  return children
}

export default User