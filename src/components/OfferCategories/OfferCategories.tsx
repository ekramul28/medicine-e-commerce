"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const OfferCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000;

  const offer = [
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303503/39fd6db45db-celevida_gjiaxz.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303502/5f3db9a5611-634x2743_eb2cln.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303502/721b231d717-covid-192_e8fxwt.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303501/e63047cb479-Noworneverrevised_spq66q.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303501/ecd248bc713-EqualsPBlatest_dgkbdu.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303501/5e9dc201ab9-DevicesClearanceStore2_iobtxa.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303501/bbac4468441-smell_lyfefy.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303500/c7e8e13d5a0-Evion_a_vqfrs2.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303500/ae1aca67b0a-24PHARMA_MM_HP_kkx85q.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303500/d9a2b50e73a-3_vp5lvd.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303500/93b84087381-2_djncfx.jpg",
      link: "",
    },
    {
      image:
        "https://res.cloudinary.com/dvtdneocc/image/upload/v1723303499/721b231d717-covid-195_wqpilh.jpg",
      link: "",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
    }, slideInterval);

    return () => clearInterval(interval);
  }, [offer.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offer.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === offer.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      <div className="overflow-hidden">
        <div
          className="flex gap-3  transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {offer.map((data, index) => (
            <div key={index} className="w-[700px] h-full flex-shrink-0">
              <Image
                src={data.image}
                alt="healthtitle"
                layout="responsive"
                width={700}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right Navigation Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black text-white rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default OfferCategories;
