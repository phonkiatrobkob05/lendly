import React, {useState} from "react";

function Register() {

    return (
        <div className="flex flex-col h-screen items-center gap-4" >

            <div className="flex justify-center items-center gap-4">
                <img src="src/assets/lendlylogo.svg" alt="Lendly logo" />
                <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
            </div>

            <div className="">กรุณาลงทะเบียน</div>

            <form className="flex flex-col gap-4">

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input className="border mt-1 p-2 w-full rounded-xl" type="email" id="email" placeholder="Input your e-mail" required />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input className="border mt-1 p-2 w-full rounded-xl" type="password" id="password" placeholder="Input your password" required />
                </div>

                <div>
                    <label htmlFor="conPass" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input className="border mt-1 p-2 w-full rounded-xl" type="conPass" id="conPass" placeholder="Confirm your password" required />
                </div>

                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl">Next</button>

            </form>

            <div className="mt-4 p-2 text-black text-sm items-center">Already have an account? 
                <span className="text-blue-500 cursor-pointer">Login here!</span>
            </div>

        </div>
    )
}

export default Register;