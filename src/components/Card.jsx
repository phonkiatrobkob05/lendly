function Card({ id, title, description, imageSrc, tags }) {
    return (
      <div id={id} className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* Container for 1:1 ratio */}
        <div className="aspect-w-1 aspect-h-1 overflow-hidden">
          <img
            className="w-full h-[100px] object-cover rounded-2xl"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="px-2 py-2s">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-2 pt-4 pb-2 flex flex-wrap">
          {Array.isArray(tags) && tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default Card;
  