import { useNavigate } from "react-router-dom";

function Card({ id, title, description, imageSrc, tags }) {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/item/${id}`)}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          className="w-full h-[100px] object-cover rounded-2xl"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="px-2 py-2">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
