"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Categories = () => {
  const categories = [
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Must haves",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Elderly care",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Elderly care",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Elderly care",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Elderly care",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Elderly care",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Personal care",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Healthcare devices",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "Health food and drinks",
      link: "",
    },
    {
      image:
        "https://i.ibb.co/TkxFT6V/axseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-3-17180102093.jpg",
      title: "skin care",
      link: "",
    },
  ];
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardWidth = 300;
  const cardsPerView = 3;
  const maxScrollIndex = Math.max(0, categories.length - cardsPerView);

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxScrollIndex));
  };

  return (
    <div className="overflow-hidden">
      <h1 className="font-semibold text-[26px]">Shop by Categories</h1>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          className="flex gap-2 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${scrollIndex * cardWidth}px)`,
          }}
        >
          {categories.map((categorie, index) => (
            <div
              key={index}
              style={{ minWidth: `${cardWidth}px` }}
              //     className="overflow-hidden"
            >
              <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl px-2 transition-transform transform hover:scale-105">
                <div className="rounded-xl h-80 flex justify-center items-center">
                  <Image
                    src={categorie?.image}
                    alt={categorie?.title}
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div>
                <p className="text-base font-medium text-center">
                  {categorie.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Categories;
