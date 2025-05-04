import React from 'react';
import { CheckCircle } from 'lucide-react';
import constructionImg from '../assets/construction.png'; // adjust path accordingly

const Construction = () => {
  return (
    <div className=" px-4 py-10 my-10 text-center">
      {/* Heading */}
      <h2 className="inline-block bg-[#a0c900] text-black font-semibold text-lg px-4 py-2 rounded-md mb-6">
        From Land to Dream Home – We Build for You!
      </h2>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={constructionImg}
          alt="Construction Illustration"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-800 mb-6 text-[15px] leading-relaxed">
        "Not just land, we help you build your dream home too! Our expert construction team ensures
        quality, affordability, and timely delivery. From planning to execution, we provide
        end-to-end solutions for residential and commercial projects."
      </p>

      {/* Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center max-w-xl mx-auto mb-8 text-sm text-left">
        <p className="flex items-center gap-2 text-green-700">
          <CheckCircle className="text-green-600" size={18} />
          Custom Home Designs
        </p>
        <p className="flex items-center gap-2 text-green-700">
          <CheckCircle className="text-green-600" size={18} />
          Affordable & Transparent Pricing
        </p>
        <p className="flex items-center gap-2 text-green-700">
          <CheckCircle className="text-green-600" size={18} />
          High-Quality Materials & Skilled Workmanship
        </p>
        <p className="flex items-center gap-2 text-green-700">
          <CheckCircle className="text-green-600" size={18} />
          End-to-End Construction Services
        </p>
        <p className="flex items-center gap-2 text-green-700">
          <CheckCircle className="text-green-600" size={18} />
          On-Time Project Completion
        </p>
      </div>

      {/* Contact Button */}
      <button className="bg-[#7a9b00] px-6 py-2 text-sm font-medium rounded text-black hover:opacity-90 shadow">
        Contact
      </button>
    </div>
  );
};

export default Construction;
