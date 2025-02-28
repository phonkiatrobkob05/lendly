import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "../components/Card";
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

function Home() {
  const cardData = [
    {
      title: "Ichitan Lemon",
      description: "Lemon Lemon",
      imageUrl: "/unclea.jpg",
      genre: "Tea",  // Added genre
      lenderName: "John Doe",  // Added lender name
      status: "Available",  // Added status
    },
    {
      title: "Ichitan Genmai",
      description: "Rice Rice",
      imageUrl: "/unclelueng.jpg",
      genre: "Tea",  // Added genre
      lenderName: "Jane Smith",  // Added lender name
      status: "On Borrow",  // Added status
    },
    {
      title: "Ichitan Original",
      description: "Green tea",
      imageUrl: "/uncletony.jpg",
      genre: "Tea",  // Added genre
      lenderName: "Alice Brown",  // Added lender name
      status: "Available",  // Added status
    },
    {
      title: "Ichitan Original",
      description: "Green tea",
      imageUrl: "/unclelee.jpg",
      genre: "Tea",  // Added genre
      lenderName: "Bob White",  // Added lender name
      status: "On Borrow",  // Added status
    },
    // Add more items as needed
  ];

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Content Container */}
      <div className="flex-grow flex flex-col items-center">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-6 sticky">
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

        {/* Hero Section */}
        <div className="flex">
          <div className="flex flex-col text-center mb-8">
            <div className="flex items-center gap-4 mb-4">
              <img src="/lendlylogo.svg" alt="Lendly Logo" className="w-6" />
              <h1 className="text-2xl font-bold">lendly</h1>
            </div>
            <p className="text-lg text-gray-600">Lend it. Borrow it. <br /> Love it.</p>
          </div>
          <div className="flex items-center justify-center mb-8">
            <img src="/lendborrowlogo.svg" alt="Lend and Borrow" className="w-30" />
          </div>
        </div>

        {/* Recommended Section */}
        <div className="w-full">
          <div className="flex mx-auto justify-between">
            <h1 className="text-xl font-semibold mb-4">Recommended for You</h1>
            <p>see all</p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-w-1 aspect-h-1">
                  <Card
                    id={`card-${index}`}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageUrl}
                    genre={card.genre} // Pass genre
                    lenderName={card.lenderName} // Pass lender name
                    status={card.status} // Pass status
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trending Section */}
        <div className="w-full">
          <div className="flex mx-auto justify-between">
            <h1 className="text-xl font-semibold mb-4">Trending</h1>
            <NavLink to="">see all</NavLink>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-w-1 aspect-h-1">
                  <Card
                    id={`card-${index}`}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageUrl}
                    genre={card.genre} // Pass genre
                    lenderName={card.lenderName} // Pass lender name
                    status={card.status} // Pass status
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Navbar stays at the bottom */}
      <Navbar />
    </div>
  );
}

export default Home;
