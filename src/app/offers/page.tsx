"use client";
import React, { useState } from "react";
import { useProductQuery } from "../redux/features/products/productApi";
import { TMeta, TProduct } from "@/assets/AllType";
import MedicineCard from "../medicine/MedicineCard";
import LoadingSpinner from "@/components/Loding/Loding";
import CustomPagination from "@/components/Pagination/Pagination";
import Container from "@/components/Container/Container";

const Offers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useProductQuery([
    {
      name: "page",
      value: currentPage,
    },
  ]);
  if (!data || !data.data) return <p>No data found</p>;
  const products: TProduct[] = data?.data?.result;
  const offerProduct: TProduct[] = products.filter(
    (product) => product.offer === true
  );
  const meta: TMeta = data?.data?.meta;
  console.log(meta);
  console.log(error);
  if (error) {
    return <p>Error: {error as any}</p>;
  }
  console.log(products);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const total = offerProduct.length;
  const limit = meta.limit;
  const totalPages = Math.ceil(total / limit);
  console.log(total);

  return (
    <Container>
      <div className="mt-20 ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 gap-2 items-center mx-2 min-h-screen ">
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-screen">
              <LoadingSpinner size={200} color="#3498db" strokeWidth={3} />
            </div>
          ) : (
            offerProduct?.map((product) => (
              <MedicineCard key={product._id} product={product} />
            ))
          )}
        </div>
        <div className="flex justify-center items-center my-7">
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Container>
  );
};

export default Offers;
