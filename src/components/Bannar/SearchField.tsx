import React from "react";
import Input from "../Shared/input/input";

const SearchField = () => {
  return (
    <div className="grid items-center mt-20 ">
      <div className="  h-60 w-[80%] mx-auto">
        <p className="font-semibold text-[24px]">What are you looking for?</p>
        <p className=" flex justify-end items-center  font-medium text-sm gap-3">
          <svg
            width={24}
            height={24}
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            ></path>
          </svg>
          order with prescription.{" "}
          <span className="font-semibold text-[#0A534F]"> UPLOAD NOW </span>
        </p>
        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form className="w-full">
            <label htmlFor="UserEmail" className="sr-only">
              {" "}
              Email{" "}
            </label>

            <div className="border bg-white rounded-full p-2  sm:flex sm:items-center sm:gap-4">
              <Input
                type="email"
                id="UserEmail"
                placeholder="🔍Inter your Email"
                className="w-full bg-white p-2 border-none focus:border-transparent focus:ring-transparent sm:text-sm"
              />

              <button className="mt-1 w-full bg-teal-500 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
