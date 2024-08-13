import React from 'react';
import { FaRocket, FaLightbulb, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="p-3 font-urbanist bg-gradient-to-b from-backgroundGreen to-green-100">
      <section className="flex flex-col md:flex-row justify-around mb-16 space-y-6 md:space-y-0 md:space-x-4">
        <div className="bg-white p-8 rounded-xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
          <FaRocket className="text-5xl text-yellow-500 mb-6 mx-auto animate-bounce" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Mission</h2>
          <p className="text-gray-600">Embark on a culinary adventure with our Recipe Sharing App, where every dish is a new horizon to explore.</p>
        </div>
        <div className="bg-white p-8 rounded-xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
          <FaLightbulb className="text-5xl text-green-500 mb-6 mx-auto animate-pulse" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Vision</h2>
          <p className="text-gray-600">Uniting flavors globally, inspiring culinary creativity, and fostering connections through the joy of shared recipes.</p>
        </div>
        <div className="bg-white p-8 rounded-xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full md:w-1/3">
          <FaGlobe className="text-5xl text-red-500 mb-6 mx-auto animate-spin-slow" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Culture</h2>
          <p className="text-gray-600">Cultivating a vibrant community where culinary creativity flourishes and every shared recipe narrates a unique story.</p>
        </div>
      </section>

      <section className="text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-800 animate-fade-in-down">Welcome to TasteTribe</h1>
        <p className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
          From seasoned chefs to kitchen novices, TasteTribe is your gateway to exploring new flavors,
          sharing beloved dishes, and connecting with fellow food enthusiasts in a global culinary community.
        </p>
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-4">
          <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVjaXBlJTIwc2hhcmluZyUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D" alt="Cooking 1" className="w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
          <img src="https://plus.unsplash.com/premium_photo-1663045208084-fe40c38ad234?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cooking 2" className="w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
          <img src="https://plus.unsplash.com/premium_photo-1661507070247-1ed0a6ed3ca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" alt="Cooking 3" className="w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
