"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          <Image
            src="https://i.ibb.co/xzg7M5N/Thyrocare.webp"
            alt="Thyrocare Image"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div className="hidden md:flex space-x-6 justify-center items-center">
          <a href="#" className="text-black hover:text-gray-600 text-xl">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-600 text-xl">
            About
          </a>
          <a href="#" className="text-black hover:text-gray-600 text-xl">
            Services
          </a>
          <a href="#" className="text-black hover:text-gray-600 text-xl">
            Contact
          </a>
          <Button className="md:col-span-6 text-white p-2 text-xl font-bold">
            Login
          </Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              height={24}
              width={24}
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">
            Contact
          </a>
          <Button className="md:col-span-6 text-white py-2 mt-5 ">Login</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
