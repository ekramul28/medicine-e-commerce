"use client";
import { useSingleProductQuery } from "@/app/redux/features/products/productApi";
import OfferCategories from "@/components/OfferCategories/OfferCategories";
import Button from "@/components/Shared/Button";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const { data } = useSingleProductQuery(id);

  console.log(data);
  const product = data?.data;
  const image = data?.data?.image;
  console.log(product);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000;

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === image?.length ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [image?.length]);

  const handleQuantity = () => {};
  const handleAddToCart = () => {};
  return (
    <div className="mt-36">
      <div className="min-h-screen font-poppins">
        <div className="h-[250px] bg-yellow-300 bg-detail flex justify-center items-center bg-fixed">
          <h3 className="text-gray-400 font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
            Unveiling [{product?.title}]:
            <br /> {product?.description}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-8 md:gap-0">
          <div className="md:col-span-3 text-center">
            <div className="overflow-hidden">
              <div
                className="flex gap-3  transition-transform duration-500 ease-out justify-center items-center"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {image?.map((data: string, index: number) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <Image
                      src={data}
                      alt="healthtitle"
                      layout="responsive"
                      width={400}
                      height={200}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2 ">
            <h1 className="text-4xl font-bold">{product?.title}</h1>
            <p className="  font-clashRegular text-gray-600 text-sm">
              {product?.brand}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">${product?.price}</p>
              {product?.rating}
            </div>
            <p className="text-sm mt-10 text-gray-600">
              {product?.description}
            </p>
            <p className="mt-3 font-medium">Discount:{product?.discount}%</p>
            <p className="mt-3 font-medium">
              OfferPrice:{product?.offerPrice}%
            </p>
            {/* Quantity  */}
            <div className="flex items-center gap-4 mt-3">
              <p
                onClick={() => handleQuantity("-")}
                className="w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
              >
                -
              </p>
              <p className="px-5 py-1 font-semibold border ">
                {product?.availableQuantity}
              </p>
              <p
                onClick={() => handleQuantity("+")}
                className=" w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
              >
                +
              </p>
            </div>
            {/* Wishlist */}
            <div className="flex flex-col gap-2 mt-10">
              <Button onClick={handleAddToCart} className="py-2 text-white">
                Add To Cart
              </Button>
              {/* <Button
              onClick={handleBookmarked}
              className="py-2 text-black bg-white border border-black"
            >
              Save To Wishlist
            </Button> */}
            </div>
          </div>
        </div>
        {/* <Reviews productId={_id} /> */}

        {/* <SectionHeader title="You may like" /> */}
        {/* Similar Products */}

        {/* <Container className="mb-28">
        <Swiper
          // slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          style={{
            height: "400px",
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

        {/* {suggestions?.map((product) => (
            <SwiperSlide key={product?._id} className="h-[100px]">
              <ProductCarouselCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        </Container> */}
      </div>
    </div>
  );
};

export default DetailsPage;
