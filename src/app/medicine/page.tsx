"use client";
import { useProductQuery } from "@/Redux/features/products/productApi";

import React from "react";
import { TProduct } from "@/assets/AllType";
import MedicineCard from "./MedicineCard";
import Pagination from "@/components/Pagination/Pagination";

const Medicine = () => {
  const { data } = useProductQuery(undefined);
  const products: TProduct[] = data?.data?.result;
  console.log(products);

  return (
    <div className="mt-36">
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 gap-2 items-center mx-2">
        {products?.map((product) => (
          <MedicineCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center my-7">
        <Pagination />
      </div>
    </div>
  );
};

export default Medicine;
