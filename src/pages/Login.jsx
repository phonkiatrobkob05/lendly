function Login() {
    return (
        <div className="flex flex-col h-screen items-center">
            <div className="flex items-center justify-center gap-4">
                <img src="src/assets/lendlylogo.svg" alt="Lendly Logo" />
                <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
            </div>
            <div className="">
                <h1>กรุณาเข้าสู่ระบบ</h1>
            </div>
            <form className="flex flex-col gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input className="border mt-1 p-2 w-full" type="email" id="email" placeholder="email" required />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input className="border mt-1 p-2 w-full" type="password" id="password" placeholder="Password" required />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Login</button>
            </form>
            <div className="flex">
                <h1>Forgot your password? </h1>
                <a href="">Reset here</a>
            </div>
        </div>
    );
}
export default Login;