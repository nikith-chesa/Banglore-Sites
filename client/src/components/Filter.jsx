import React from "react";

const Filter = () => {
  return (
    <div className="bg-green-50 p-4 rounded-2xl w-64 space-y-6 border text-sm">
      {/* Localities */}
      <div>
        <h3 className="font-semibold mb-2">Localities</h3>
        <div className="space-y-1">
          {["Jigani", "Anekal", "Bannerghatta", "Athibele"].map((item) => (
            <label key={item} className="block">
              <input type="checkbox" className="mr-2" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* Property Type */}
      <div>
        <h3 className="font-semibold mb-2">Property type</h3>
        <div className="space-y-1">
          {["Residential", "Commercial", "Agricultural"].map((item) => (
            <label key={item} className="block">
              <input type="checkbox" className="mr-2" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* Price Slider */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex justify-between text-xs mb-1 text-gray-600">
          <span>5 Lac</span>
          <span className="bg-lime-300 px-2 py-0.5 rounded font-semibold text-black">
            20L
          </span>
          <span>5 Cr</span>
        </div>
        <input
          type="range"
          min="5"
          max="500"
          className="w-full accent-lime-500"
        />
      </div>

      <hr />

      {/* Plot Area */}
      <div>
        <h3 className="font-semibold mb-2">Plot area</h3>
        <div className="space-y-1">
          {["600", "1500", "2400+", "Acre"].map((item) => (
            <label key={item} className="block">
              <input type="checkbox" className="mr-2" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <hr />

      {/* Approval */}
      <div>
        <h3 className="font-semibold mb-2">Approval</h3>
        <div className="space-y-1">
          {["BMRDA", "BDA", "DC converted", "A-khata", "E-khata"].map(
            (item) => (
              <label key={item} className="block">
                <input type="checkbox" className="mr-2" />
                {item}
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
