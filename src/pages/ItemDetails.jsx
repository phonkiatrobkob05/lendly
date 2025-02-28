import { useNavigate } from "react-router-dom";

function ItemDetails() {
  const navigate = useNavigate(); // Hook to navigate
  const goBack = () => navigate(-1); // Navigate to the previous page (history.back())

  // Dynamic status
  const status = "Available"; // You can replace this with dynamic data (e.g., fetched from an API)

  // Status Indicator Color
  const statusIndicator =
    status === "Available" ? (
      <span className="text-green-500">● Available</span> // Green for Available
    ) : (
      <span className="text-red-500">● On Borrow</span> // Red for On Borrow
    );

  return (
    <div className="p-4">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="bg-gray-300 text-white py-2 px-4 rounded-lg mb-4 hover:bg-gray-500 cursor-pointer"
      >
        <img src="/leftarrow.svg" alt="backarrow" />
      </button>

      {/* Item Details */}
      <div className="flex flex-col gap-4 items-center">
        <img
          className="w-48 h-48 object-cover rounded-lg  p-4"
          src="/vivobook.png" // Replace with dynamic image source if necessary
          alt="Item Image"
        />
        <div className="flex flex-col gap-6 mb-4 justify-center items-center ">


          <div>
            <p className="text-sm text-gray-500">Genre: Tech</p>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold mb-4 items-center">Item Title</h1>
              <div className="flex">
                <h1 className="text-xl font-bold mb-4 items-center" id="price">
                  100
                </h1>
                <h1 className="text-xl font-bold mb-4 items-center">
                  &nbsp;Baht <span className="text-gray-500">per day</span>
                </h1>
              </div>
            </div>

            {/* Status Indicator */}
            <p className="text-sm text-gray-500">{statusIndicator}</p>

            <p className="text-gray-700 mb-4">
              This is a detailed description of the item.
            </p>
          </div>
        </div>

        {/* Borrow Item Button */}
        <div className="flex gap-4">
          <button>
            <img src="/bookmark.svg" alt="" className="p-4 border rounded-lg cursor-pointer"/>
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer">
            Borrow Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
