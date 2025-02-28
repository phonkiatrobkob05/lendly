import Navbar from "../components/Navbar";

function Profile() {
    return (

      <div className='w-full h-screen flex flex-col items-center gap-[10px]'>
        <div className='w-full h-[100px] flex justify-center items-end'>
          <h1 className='text-[14px] font-bold'>
            My Profile
          </h1>          
        </div>
        <div className="w-[150px] h-[150px] relative">
          <div className="absolute w-[44px] h-[44px] bg-[#1769ff] rounded-full flex justify-center items-center bottom-0 right-0 border-2 border-[#5194ff] ">
              <i className="fa-solid fa-pen text-[#ffffff]"></i>
          </div>
          <div className="w-full h-full rounded-full truncate border-2 border-[#5194ff] ">
              <img src="../public/cat.jpg" alt="profile pic" className="object-cover h-full w-full"/>
          </div>
        </div>
          <div className="w-[213px] h-[34px] flex justify-center flex-col items-center">
            <h1 className="text-[20px]">
              Meow Meow
            </h1>
            <p className="text-[8px]">
              meow@gmail.com  
            </p>  
          </div>
          {/* menu bar */}
          <div className="flex flex-col w-full px-[40px]">
            {/* Edit profile */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-regular fa-pen-to-square text-[30px] text-[#5194FF]"></i>
                  <p className="text-[14px]">
                    Edit Profile
                  </p>
              </div>
              <div className="">
                <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
              </div>
            </div>

            {/* Member ship */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-solid fa-circle-user text-[30px] text-[#5194FF]"></i>
                  <p className="text-[14px]">
                    Member ship
                  </p>
              </div>
              <div className="">
                <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
              </div>
            </div>

            {/* Notifications */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-regular fa-bell text-[30px] text-[#5194FF]"></i>
                  <p className="text-[14px]">
                    Notifications
                  </p>
              </div>
              <div className="">
                <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
              </div>
            </div>

            {/* Help */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-regular fa-circle-question text-[30px] text-[#5194FF]"></i>
                  <p className="text-[14px]">
                    Help
                  </p>
              </div>
              <div className="">
                <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
              </div>
            </div>

            {/* Report a problem */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-solid fa-triangle-exclamation text-[30px] text-[#5194FF]"></i>
                  <p className="text-[14px]">
                    Report a problem
                  </p>
              </div>
              <div className="">
                <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
              </div>
            </div>

            {/* Logout */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-solid fa-arrow-right-from-bracket text-[30px] text-[#DC2626]"></i>
                  <p className="text-[14px]">
                    Logout
                  </p>
              </div>
              <div className="">
                <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
              </div>
            </div>
          </div>
          
          <Navbar/>
      </div>   
    );
  } 
  export default Profile;