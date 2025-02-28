import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Register=()=>{
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate()
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (value.confirmPassword !== value.password) {
      alert("Passwords do not match!");
    }
    else{
      try {
        const register = await axios.post(import.meta.env.VITE_API_URI+'/register',value)
        alert(register.data);
        navigate('/login')
      } catch (error) {
        console.log('register error: '+error);
      }
      
    }
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex justify-center items-center gap-4">
        <img src="/lendlylogo.svg" alt="Lendly logo" />
        <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
      </div>

      <div className="mt-6 mb-6 font-[Inter]">กรุณาลงทะเบียน</div>
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">Email</label>
          <div className="relative">
            <input
              className="border p-2 pl-10 w-full rounded-lg"
              type="email"
              id="email"
              placeholder="Input your e-mail"
              required
              name='email'
              onChange={handleChange}
            />
            <img className="absolute left-2 top-1/2 transform -translate-y-1/2" src="public/mailicon.svg" alt="" />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">Password</label>
          <div className="relative">
            <input
              className="border p-2 pl-10 w-full rounded-lg"
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Input your password"
              required
              name="password"
              onChange={handleChange}
            />
            <img className="absolute left-2 top-1/2 transform -translate-y-1/2" src="/lockicon.svg" alt="Lock Icon" />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <img src="/closeeye.svg" alt="Hide Password" />
              ) : (
                <img src="/eye.svg" alt="Show Password" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="conPass" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">Confirm Password</label>
          <div className="relative">
            <input
              className="border p-2 pl-10 w-full rounded-lg"
              type={passwordVisible ? "text" : "password"}
              id="conPass"
              placeholder="Confirm password"
              required
              name='confirmPassword'
              onChange={handleChange}
            />
            <img className="absolute left-2 top-1/2 transform -translate-y-1/2" src="/lockicon.svg" alt="Lock Icon" />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <img src="/closeeye.svg" alt="Hide Password" />
              ) : (
                <img src="/eye.svg" alt="Show Password" />
              )}
            </button>
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Submit
        </button>
      </form>

      <div className="mt-4 p-2 text-black text-sm items-center">
        Already have an account?
        <a href="/#/login" className="text-blue-500 cursor-pointer">Login here!</a>
      </div>
    </div>
  );
}

export default Register;
