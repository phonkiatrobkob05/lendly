import React,{useState} from "react";
import Dropdown from "../components/Dropdown";
function NextRegister() {

    const [selected, setSelected] = useState("Choose One")

    return (
        
        <div className="flex flex-col h-screen items-center" >

            <div className="flex justify-center items-center gap-4">
                <img src="/lendlylogo.svg" alt="Lendly logo" />
                <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
            </div>

            <div className="">กรุณาลงทะเบียน</div>

            <form className="flex flex-col gap-4">

                <div>
                    <label htmlFor="studentNum" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">Student Number</label>
                    <div className="relative">
                        <input className="border p-2 pl-3 w-full rounded-lg" type="studentNum" 
                        id="studentNum" placeholder="Student number" required />

                    </div>

                </div>

                <div>
                    <label htmlFor="FirstName" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">First Name</label>
                    <div className="relative">
                        <input className="border p-2 pl-3 w-full rounded-lg" type="FirstName" 
                        id="FirstName" placeholder="First Name" required />

                    </div>

                </div>

                <div>
                    <label htmlFor="LastName" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">Last Name</label>
                    <div className="relative">
                        <input className="border p-2 pl-3 w-full rounded-lg" type="LastName" 
                        id="LastName" placeholder="Last Name" required />

                    </div>

                </div>

                <div>
                    <Dropdown selected={selected} setSelected={setSelected}></Dropdown>

                </div>

                

                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Register</button>

            </form>

            <div className="mt-4 p-2 text-black text-sm items-center">Already have an account? 
                <span className="text-blue-500 cursor-pointer">Login here!</span>
            </div>

        </div>
    );
}

export default NextRegister;