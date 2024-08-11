import { chooseData } from "@/assets/ChooseData";
import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div>
      <h1 className="font-semibold text-[26px]">Why Choose Us?</h1>
      <div>
        <div className="flex gap-4">
          {chooseData.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <div>
                <Image
                  src={item?.image}
                  alt="ok"
                  height={130}
                  width={130}
                  priority
                  className="py-2 "
                />
              </div>
              <div>
                <h1 className="font-semibold text-[26px]">{item?.title}</h1>
                <p className="font-normal text-base">{item?.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
