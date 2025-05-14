import React, { useState } from "react";
import Filter from "./Filter";
import LandDetailedCard from "./LandDetailedCard";
import { SlidersHorizontal } from "lucide-react"; // Icon for filter

const LandList = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="mt-24 px-4 flex justify-center">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
        {/* Filter Toggle Button (mobile only) */}
        <div className="lg:hidden flex justify-end mb-2">
          <button
            className="flex items-center gap-2 bg-[#eaeee9] text-gray-700 px-4 py-2 rounded-md border hover:bg-lime-100"
            onClick={() => setShowFilter(!showFilter)}
          >
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

        {/* Filter Sidebar */}
        {showFilter && (
          <div className="lg:hidden">
            <Filter />
          </div>
        )}
        <div className="hidden lg:block">
          <Filter />
        </div>

        {/* Land Cards */}
        <div className="flex-grow space-y-6">
          <LandDetailedCard />
          <LandDetailedCard />
          <LandDetailedCard />
        </div>
      </div>
    </div>
  );
};

export default LandList;
