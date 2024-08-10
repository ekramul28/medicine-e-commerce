import React from "react";
import Image from "next/image";
import SearchField from "./SearchField";

interface TBanner {
  title: string;
  subtitle: string;
  buttonLink: string;
  backgroundImage: string;
  //   backgroundColor: string;
}

const items: TBanner[] = [
  {
    title: "Medicine",
    subtitle: "FLAT 24% OFF",
    backgroundImage: "https://i.ibb.co/pxpF8kb/medicine-ff2.webp",
    //     backgroundColor: "",
    buttonLink: "",
  },
  {
    title: "Lab Tests",
    subtitle: "UpTo 70% OFF",
    backgroundImage: "https://i.ibb.co/DRmDTH1/labtest-ff2.webp",
    buttonLink: "",
  },
  {
    title: "Healthcare",
    subtitle: "UpTo 60% OFF",
    backgroundImage: "https://i.ibb.co/2h3w168/healthcare-ff2.webp",
    buttonLink: "",
  },
  {
    title: "Health Blogs",
    subtitle: "",
    backgroundImage: "https://i.ibb.co/PhtsPyQ/health-blogs-ff3.webp",
    buttonLink: "",
  },
  {
    title: "PLUS",
    subtitle: "Save 5% EXTRA",
    backgroundImage: "https://i.ibb.co/DR25dfK/plus-ff2.webp",
    buttonLink: "",
  },
  {
    title: "Offer",
    subtitle: "",
    backgroundImage: "https://i.ibb.co/Dr0My79/offers-ff.webp",
    buttonLink: "",
  },
  {
    title: "Value Store",
    subtitle: "FLAT 50% OFF",
    backgroundImage: "https://i.ibb.co/HP63qYz/value-store3.png",
    buttonLink: "",
  },
];

const Banner: React.FC = () => {
  return (
    <div>
      <div className="mx-auto">
        {" "}
        <SearchField />
      </div>
      <div className="flex justify-between  mt-7">
        {items.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden hover:shadow-lg px-2 transition-transform transform hover:scale-105 "
          >
            <div className=" rounded-xl ">
              <Image
                src={item?.backgroundImage}
                alt="ok"
                height={150}
                width={150}
                priority
                className="py-2 "
              />
            </div>
            <div className="text-center  ">
              <p className=" text-base font-medium py-2">{item?.title}</p>
              <p className="text-base font-medium text-[#F47779]">
                {item?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
