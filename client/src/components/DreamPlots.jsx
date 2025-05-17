import React from "react";
import LandCard from "./LandCard";
import { Link } from "react-router-dom";
const DreamPlots = () => {
  return (
    <div className="py-10 px-4 my-10">
      <div className="max-w-6xl mx-auto text-start">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Find Your Dream Plots
        </h1>

        <section className="flex flex-wrap gap-6 justify-center items-center">
          <Link to={"/lands"}>
            <LandCard />
          </Link>
          <Link to={"/lands"}>
            <LandCard />
          </Link>
          <Link to={"/lands"}>
            <LandCard />
          </Link>
          <Link to={"/lands"}>
            <LandCard />
          </Link>
          <Link to={"/lands"}>
            <LandCard />
          </Link>
          <Link to={"/lands"}>
            <LandCard />
          </Link>
        </section>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link to="/lands">
          <button className="bg-[#7a9b00] hover:bg-lime-800 text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2 transition">
            View More <span className="text-xl">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DreamPlots;
