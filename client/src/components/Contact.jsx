import React from 'react';
import contactImg from '../assets/pexels-serjosoza-30117022 1.png'; // adjust path accordingly

const Contact = () => {
  return (
    <div id="contact" className="bg-[#f4f3eb] py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Contact us / Enquiry</h2>
          <p className="text-sm text-gray-500 mb-6">no unwanted calls or sms</p>
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="91+ 000 000 0000"
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Leave a message"
                rows={3}
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#7a9b00] text-black font-semibold px-6 py-2 rounded shadow hover:opacity-90 transition"
            >
              SUBMIT
            </button>
          </form>

          <p className="mt-8 font-semibold text-3xl text-gray-800">
            Buy land plots for <br />
            construction and business....
          </p>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src={contactImg}
            alt="Contact visual"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;