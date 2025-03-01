import React from 'react';
import { useParams } from 'react-router-dom';

function Itemdetail() {
  // Get the id from the URL params
  const { id } = useParams();

  const cardData = [
    {
      id: "1",
      title: "Ichitan Lemon",
      description: "Lemon Lemon",
      imageUrl: "/unclea.jpg",
      tags: ["Tea", "Ichitan", "Lemon"],
    },
    {
      id: "2",
      title: "Ichitan Genmai",
      description: "Rice Rice",
      imageUrl: "/unclelueng.jpg",
      tags: ["Tea", "Ichitan", "Genmai"],
    },
    {
      id: "3",
      title: "Ichitan Original",
      description: "Green tea",
      imageUrl: "/uncletony.jpg",
      tags: ["Tea", "Ichitan", "Og"],
    },
    {
      id: "4",
      title: "Ichitan Original",
      description: "Green tea",
      imageUrl: "/unclelee.jpg",
      tags: ["Tea", "Ichitan", "Og"],
    },
    // Add more items as needed
  ];

  // Find the card by its ID
  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">{card.title}</h1>
      <img src={card.imageUrl} alt={card.title} className="w-48 mb-4" />
      <p className="text-lg text-gray-600 mb-4">{card.description}</p>
      <div className="flex gap-2">
        {card.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Itemdetail;
