// import { useState } from "react";
import { Heart } from "lucide-react";
import sampleImg from "../assets/land-image.png"; // Update this to your image path

const LandCard = () => {
  // const [isFav, setIsFav] = useState(false);

  // const toggleFavorite = () => {
  //   setIsFav(!isFav);
  // };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border max-w-xs w-full hover:cursor-pointer">
      {/* Image + Heart */}
      <div className="relative">
        <img
          src={sampleImg}
          alt="land plot"
          className="w-full h-40 object-cover"
        />
        {/* <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow transition"
        >
          <Heart
            className={`text-red-500 ${isFav ? "fill-red-500" : "fill-none"}`}
            size={18}
          />
        </button> */}
      </div>

      {/* Details */}
      <div className="p-4 space-y-1 text-sm text-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-black">Surya layout</h3>
            <p className="text-xs text-gray-500 truncate max-w-[140px]">
              jigani road, banglore long extra address here
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-black">1200 sq.ft</p>
            <p className="text-xs text-gray-500">Ready to move</p>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs mt-2">
              <span className="font-semibold text-black">BMRDA Approved</span>{" "}
              <span className="inline-block text-blue-500 ml-1">🔵</span>
            </p>
            <p className="text-xs text-gray-500 truncate max-w-[140px]">
              check out this land/plots near , jigani road, banglore
            </p>
          </div>
          <div className="flex flex-col justify-between items-center mt-2">
            <p className="text-lg font-semibold text-black">₹ 50 Lac</p>
            <p className="text-xs text-gray-500">3,800 / sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
