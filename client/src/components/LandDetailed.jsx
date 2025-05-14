import React from "react";
import mainImg from "../assets/Mainimage.png";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

const LandDetailed = () => {
  return (
    <div className="w-full px-4 py-10 bg-[#f9f7f0] flex flex-col gap-6 max-w-5xl mx-auto mt-28">
      {/* Image Gallery */}
      <div className="w-full">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-3">
            <img
              src={mainImg}
              alt="main"
              className="w-full rounded-xl h-[250px] object-cover"
            />
          </div>
          <img src={img1} className="rounded-lg h-[80px] w-full object-cover" />
          <img src={img2} className="rounded-lg h-[80px] w-full object-cover" />
          <img src={img3} className="rounded-lg h-[80px] w-full object-cover" />
        </div>
      </div>

      {/* Details and Contact */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-6">
        {/* Details */}
        <div className="flex-1 space-y-4 order-1">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                Bannerghatta road, kalkere 1st..
              </h1>
              <p className="text-sm font-medium text-gray-700">
                Land/plots in bannerghatta road
              </p>
              <p className="text-xs text-gray-500">
                Description : Melodies of Life offers plots in Hosa Road ,
                Bangalore South, for sale
              </p>
            </div>
            <div className="text-right space-y-1">
              <h2 className="text-lg font-semibold">₹ 50 Lac</h2>
              <p className="text-sm text-gray-600">3,800 / sqft</p>
              <p className="text-sm font-medium">2000 sqft</p>
              <p className="text-xs text-gray-500">Plot area</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <ul className="space-y-2">
              <li>
                📍 BJS Colony, Jodhpur — near School, Highway, Hospital, Metro
              </li>
              <li>💧 Water and electricity available</li>
              <li>💰 Available: EMI / Loan</li>
            </ul>
            <ul className="space-y-2">
              <li>🌅 East Facing</li>
              <li>📏 25ft to 30ft Road</li>
              <li>✅ Approved by: BMRDA BDA</li>
              <li>📜 Legal status: A Khata</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[350px] border border-gray-300 rounded-xl p-4 shadow-md bg-white order-2">
          <h3 className="text-lg font-semibold mb-1">Contact us / Enquiry</h3>
          <p className="text-xs text-gray-400 mb-3">no unwanted calls or sms</p>
          <form className="flex flex-col gap-3 text-sm">
            <div>
              <label className="font-medium">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full border rounded px-3 py-1 mt-1"
              />
            </div>
            <div>
              <label className="font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full border rounded px-3 py-1 mt-1"
              />
            </div>
            <div>
              <label className="font-medium">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="91+ 000 000 0000"
                className="w-full border rounded px-3 py-1 mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white py-1 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandDetailed;
