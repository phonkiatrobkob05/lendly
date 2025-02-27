import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Updated for react-router-dom v6

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate(); // Updated for react-router-dom v6

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your validation logic for passwords and email here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Navigate to the next registration page and pass the email and password
    navigate('/NextRegister', {
      state: { email, password },
    });
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex justify-center items-center gap-4">
        <img src="/lendlylogo.svg" alt="Lendly logo" />
        <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
      </div>

      <div className="">กรุณาลงทะเบียน</div>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      </form>

      <div className="mt-4 p-2 text-black text-sm items-center">
        Already have an account?
        <span className="text-blue-500 cursor-pointer">Login here!</span>
      </div>
    </div>
  );
}

export default Register;
