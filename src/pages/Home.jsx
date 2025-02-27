import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "../components/Card";

function Home() {
  const cardData = [
    {
      title: "Ichitan Lemon",
      description: "Lemon Lemon",
      imageUrl: "/Ichitan-Lemon.png",
      tags: ["Tea", "Ichitan", "Lemon"],
    },
    {
      title: "Ichitan Genmai",
      description: "Rice Rice",
      imageUrl: "/Ichitan-Genmai.png",
      tags: ["Tea", "Ichitan", "Genmai"],
    },
    {
      title: "Ichitan Original",
      description: "Green tea",
      imageUrl: "/Ichitan-Original.png",
      tags: ["Tea", "Ichitan", "Og"],
    },
    // Add more items as needed
  ];

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="flex items-center justify-center gap-4 mb-6">
        <img src="/lendlylogo.svg" alt="Lendly Logo" className="w-12" />
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        <button className="p-2">
          <img src="/bellicon.svg" alt="Notification" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center mb-8">
        <div className="flex items-center gap-4 mb-4">
          <img src="/lendlylogo.svg" alt="Lendly Logo" className="w-6" />
          <h1 className="text-2xl font-bold">lendly</h1>
        </div>
        <p className="text-lg text-gray-600">Lend it. Borrow it. <br /> Love it.</p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <img src="/lendborrowlogo.svg" alt="Lend and Borrow" className="w-20" />
      </div>

      <div className="w-full">
        <h1 className="text-xl font-semibold mb-4">Recommended for You</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              {/* Add aspect ratio classes to ensure 1:1 */}
              <div className=""> {/* This forces the height to be equal to width */}
                <Card
                  id={`card-${index}`}
                  title={card.title}
                  description={card.description}
                  imageSrc={card.imageUrl}
                  tags={card.tags}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
