import { useSelector } from 'react-redux'



const User = ({children}) => {
    const {user} = useSelector((state)=>({...state}))
    console.log('userRoute',user);
    

  return user && user.user.token ? children : <div className='bg-gray-400 h-screen flex justify-center'><p className='flex items-center justify-center text-5xl font-bold'>Login!!!!</p></div>
    
}

export default User