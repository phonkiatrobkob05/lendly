import { useSelector } from 'react-redux'

const User = ({children}) => {
    const {user} = useSelector((state)=>({...state}))
    console.log('userRoute',user);
    

  return user && user.user.token ? children : <p>please login</p>
}

export default User