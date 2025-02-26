function Register() {
    return (
        <div className="container flex-col m-auto mt-[200px] bg-white pb-[30px]" >

            <div className="header flex-col items-center gap-[9px] w-[100%] mt-[30px] text-2xl font-bold">
                <div className="text text-[#3c009d]">Sign up</div>
                <div className="underline w-[61px] h-[px] bg-[#3c009d] rounded-lg"></div>
            </div>

            <div className="inputs flex-col mt-[55px] gap-[25px]">

                <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[eaeaea] rounded-lg">
                    <img className="mt-[0px] mr-[30px]" src="" alt="" />
                    <input className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-lg" type="text" placeholder="Name" />
                </div>

                <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[eaeaea] rounded-lg">
                    <img className="mt-[0px] mr-[30px]" src="" alt="" />
                    <input type="email" placeholder="E-mail ID" />
                </div>

                <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[eaeaea] rounded-lg">
                    <img className="mt-[0px] mr-[30px]" src="" alt="" />
                    <input type="password" placeholder="Password" />
                </div>

            </div>

        <div className="submit-container">
            <div className="forgot-password pl-[62px] mt-[27px] text-[#797979] text-sm">Forget password?<span>Click here!</span></div>
            <div className="submit">Sign up</div>
            <div className="submit">Login</div>

        </div>

        </div>
    )
}

export default Register;