import { useNavigate } from "react-router-dom";
import "./LoadPic.css"

function Loading() {

    const navigate = useNavigate();

    return (

        <div className="flex flex-col items-center h-screen p-4 ">

            <img 
                src="/newShirt.jpg" 
                alt="loadingPic" 
                className="w-auto h-full m-12 flex justify-center items-center shadow-2xl" />
                
            <div className="font-[Inter] font-semibold text-3xl sm:text-[38px] text-center m-4 mt-5">
                The Future of Sharing<br/>
                Borrow What You Need<br/>
                Lend What You Don't
            </div>

            <div className="text-gray-400 text-sm text-center">
                Less buying, more sharing——smart lending<br/> 
                starts here
            </div>

            <button
                onClick={() => navigate("/Login")}
                className="w-[50%] p-4 mt-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
                Get Start
            </button>

            <button
                onClick={() => navigate("/Register")}
                className="w-[50%] p-4 mt-4 mb-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 cursor-pointer"
            >
                I'm new, Let's Register
            </button>
            
        </div>
        
    )
}

export default Loading;