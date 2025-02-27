import React, { useState } from 'react';

function Register() {
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [faculty, setFaculty] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();

       
        console.log({ studentId, firstName, lastName, faculty });

       
        setIsSuccess(true);

        
        setTimeout(() => {
            setIsSuccess(false); 
        }, 3000);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="flex justify-center items-center gap-4">
                <img src="/lendlylogo.svg" alt="Lendly logo" />
                <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
            </div>
            <div className="">กรุณาลงทะเบียน</div>
            <div className="w-full max-w-md p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                {isSuccess && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md text-center">
                        Registration Successful!
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                            Student ID
                        </label>
                        <input
                            type="text"
                            id="studentId"
                            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
                            Faculty
                        </label>
                        <select
                            id="faculty"
                            className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            value={faculty}
                            onChange={(e) => setFaculty(e.target.value)}
                            required
                        >{/* ใส่ให้แหน่คับ */}
                            <option value="" disabled>Select your faculty</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Architecture">Architecture, Art and Design</option>
                            <option value="Science">Science</option>
                            <option value="IndusEdu">Industrial Education and Technology</option>
                            <option value="AgriTech">Agricultural and Technology</option>
                            <option value="InformTech">Information Technology</option>
                            <option value="FoodIndus">Food Industry</option>
                            <option value="Business">Business</option>
                            <option value="LibArt">Liberal Arts</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Nursing">Nursing</option>
                            <option value="IntInnTech">Integrated Innovative Technology</option>

                            
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
