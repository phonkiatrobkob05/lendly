import { useState } from 'react';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex flex-col items-center h-dvh pt-4">
            <div className="flex items-center justify-center gap-4 ">
                <img src="/lendlylogo.svg" alt="Lendly Logo" />
                <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
            </div>
            <div className="">
                <h1 className="mt-6 mb-6 font-[Inter]">กรุณาเข้าสู่ระบบ</h1>
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            </div>
            <form className="flex flex-col gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-[Inter] py-1">Email</label>
                    <div className="relative">
                        <input className="border p-2 w-full pl-10 rounded-lg" type="email" id="email" placeholder="email" required />
                        <img src="/mailicon.svg" alt="emailicon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-[Inter] py-1">Password</label>
                    <div className="relative">
                        <input className="border mt-1 p-2 w-full pl-10 rounded-lg" type={passwordVisible ? "text" : "password"} id="password" placeholder="Password" required />
                        <img src="/lockicon.svg" alt="Lock Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            {passwordVisible ? (
                                <img src="/closeeye.svg" alt="Hide Password" />
                            ) : (
                                <img src="/eye.svg" alt="Show Password" />
                            )}
                        </button>
                    </div>
                </div>
            </form>
            <div className="flex py-4">
                <h1>Forgot your password? </h1>
                <a href="" className="text-blue-300">&nbsp;Reset here</a>
                
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Login</button>

            {/* This part will be pushed to the bottom */}
            <div className="flex mt-auto py-4">
                <h1>Don’t have an account? </h1>
                <a href="" className="text-blue-500">&nbsp;Register here</a>
            </div>
        </div>
    );
}
export default Login;
