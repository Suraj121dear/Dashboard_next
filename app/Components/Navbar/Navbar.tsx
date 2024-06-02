"use client";

import React from "react";
import star from "../../../assets/Star.png";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <nav className="space-x-4">
          ß<a className="text-2xl font-bold text-red-600">uifry</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Features
          </a>
        </nav>

        <div className="flex items-center space-x-9">
          <a href="#" className="bg-black text-white px-4 py-2 rounded">
            Download
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Image src={star} alt="Star" width={44} height={44} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
