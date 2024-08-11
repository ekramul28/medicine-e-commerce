import React from "react";
import Image from "next/image";
import SearchField from "./SearchField";
import { items } from "@/assets/BannerData";

const Banner: React.FC = () => {
  return (
    <div>
      <div className="mx-auto">
        {" "}
        <SearchField />
      </div>
      <div className="flex justify-between  ">
        {items.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden hover:shadow-lg px-2 transition-transform transform hover:scale-105 "
          >
            <div className=" rounded-xl ">
              <Image
                src={item?.backgroundImage}
                alt="ok"
                height={130}
                width={130}
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
