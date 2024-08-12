"use client";
import { useProductQuery } from "@/Redux/features/products/productApi";

import React, { useState } from "react";
import { TMeta, TProduct } from "@/assets/AllType";
import MedicineCard from "./MedicineCard";
import LoadingSpinner from "@/components/Loding/Loding";
import CustomPagination from "@/components/Pagination/Pagination";

const Medicine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useProductQuery({
    name: "page",
    value: currentPage,
  });
  const products: TProduct[] = data?.data?.result;
  const meta: TMeta[] = data?.data?.meta;
  //   console.log(meta);
  //   console.log(data);
  if (isLoading) {
    return <LoadingSpinner size={40} color="#3498db" strokeWidth={3} />;
  }

  if (error) {
    return <p>Error: {error as any}</p>;
  }
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const totalPages = meta.totalPage as any;
  return (
    <div className="mt-36 ">
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 gap-2 items-center mx-2 min-h-screen">
        {products?.map((product) => (
          <MedicineCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center my-7">
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Medicine;
