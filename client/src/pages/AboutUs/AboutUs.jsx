import React from 'react';
import { FaRocket, FaLightbulb, FaGlobe } from 'react-icons/fa'; // Importing icons from react-icons

const AboutUs = () => {
  return (
    <div className="p-20 font-urbanist bg-backgroundGreen">
      <section className="flex flex-col md:flex-row justify-around mb-16 space-y-6 md:space-y-0 md:space-x-4">
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow-lg w-full md:w-1/3">
          <FaRocket className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p>Just like a spaceship embarks on a journey, our Recipe Sharing App aims to take you on a culinary adventure.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow-lg w-full md:w-1/3">
          <FaLightbulb className="text-4xl text-green-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p>We envision a global culinary community where diverse flavors unite, inspiring creativity and fostering connections through the joy of shared recipes.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow-lg w-full md:w-1/3">
          <FaGlobe className="text-4xl text-red-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4">Culture</h2>
          <p>We are passionate about fostering a vibrant community where culinary creativity knows no bounds and every shared recipe tells a unique story.</p>
        </div>
      </section>

      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to TasteTribe</h1>
        <p className="text-lg mb-8">
          Whether you're a seasoned chef or a kitchen newbie, TasteTribe offers a platform to explore new flavours,
          share your favourite dishes, and connect with like-minded food lovers.
        </p>
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-4">
          <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVjaXBlJTIwc2hhcmluZyUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D" alt="Cooking 1" className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://plus.unsplash.com/premium_photo-1663045208084-fe40c38ad234?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cooking 2" className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://plus.unsplash.com/premium_photo-1661507070247-1ed0a6ed3ca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" alt="Cooking 3" className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
