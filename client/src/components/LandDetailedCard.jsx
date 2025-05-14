import React from "react";
import landImage from "../assets/land-image.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const LandDetailedCard = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#ebffe6] border rounded-xl p-4 gap-4 w-full">
      {/* Image */}
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <img
          src={landImage}
          alt="Land"
          className="w-44 h-48 object-cover rounded-lg border"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-semibold text-lg text-gray-800">
            Bannerghatta road, kalkere 1st..
          </h2>
          <p className="text-sm text-gray-600">
            Land/plots in bannerghatta road
          </p>

          <div className="flex flex-wrap gap-6 mt-2 text-sm font-medium">
            <div>
              ₹ 50 Lac
              <div className="text-xs text-gray-500 font-normal">
                3,800 / sqft
              </div>
            </div>
            <div className="hidden sm:block border-l h-6" />
            <div>
              2000 sqft
              <div className="text-xs text-gray-500 font-normal">Plot area</div>
            </div>
          </div>

          <div className="mt-3 text-sm">
            <p>
              <span className="font-medium">Nearby:</span> school, metro,
              highway
            </p>
            <p className="mt-1">
              <span className="font-medium">Description:</span> Melodies of Life
              offers plots in Hosa Road, Bangalore South, for sale. Swimming
              Pool,
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            to={"/land-details"}
            className="border border-gray-600 px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer"
          >
            <button>View Details</button>
          </Link>
          <HashLink
            key={"Contact"}
            to={"/#contact"}
            className="bg-green-800 text-white px-5 py-1 rounded-md text-sm font-medium hover:bg-green-900 cursor-pointer"
          >
            <button>Contact</button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default LandDetailedCard;
