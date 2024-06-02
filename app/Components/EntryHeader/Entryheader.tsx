import Image from "next/image";
import React from "react";
import phone from "../../../assets/Screen.png";
import "./Entryheader.styles.module.css";

export default function Entryheader() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold gradient-text">
          Make The Best Financial Decisions
        </h1>
        <p className="mt-4 text-gray-600">
          Cum Et Convallis Risus Placeat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Aplsciplcing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="bg-black text-white px-6 py-3 rounded">
            Get Started
          </a>
          <a href="#" className="flex items-center text-gray-800">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm1 15l-1 1V6l1 1 3.5 3.5L11 15z" />
            </svg>
            Watch Video
          </a>
        </div>
      </div>

      <div className="mt-16 flex justify-center space-x-4">
        <div className="angled-image">
          <Image src={phone} alt="App Screenshot 1" className="w-64 h-auto" />
        </div>
        <div className="angled-image-right">
          <Image src={phone} alt="App Screenshot 1" className="w-64 h-auto" />
        </div>
        <div className="angled-image">
          <Image src={phone} alt="App Screenshot 1" className="w-64 h-auto" />
        </div>
      </div>
    </main>
  );
}
