import React from 'react';
import PrimaryButton from '../../comonents/PrimaryButton';

export const Venue = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-10">
      <div className="w-full max-w-[1152px]">
        <img
          src="src/assets/hero-image.png"
          alt="Hero"
          className="w-full h-[500px] object-cover mx-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start mt-8 max-w-[1152px] w-full">
        <div className="flex-1 max-w-full md:max-w-[1156px]">
          <div className="mb-8 text-white">
            <h1 className="text-3xl font-bold">Birchwood</h1>
            <p className="text-lg">Bergen, Norway</p>
            <div className="flex items-center mt-4">
              <div className="w-[45px] h-[45px] bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Lilly Westwood</h2>
                <p>Host</p>
              </div>
            </div>
            <hr className="mt-3 mb-3 border-gray-600" />
            <p className="mt-2">
              Indulge in the elegance of our luxurious apartment, where sophisticated design meets modern comfort. This spacious retreat offers stunning views, top-tier amenities, and exquisite furnishings, providing the perfect blend of style and convenience. Whether you're here for business or leisure, every detail has been thoughtfully curated to ensure a truly unforgettable stay.
            </p>
            <hr className="mt-3 mb-3 border-gray-600" />
            <div className="flex items-center mt-4">
              <img
                src="/path-to-wifi-icon.png"
                alt="WiFi"
                className="w-6 h-6"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">WiFi Available</h3>
                <p>High-speed internet throughout the property</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="/path-to-wifi-icon.png"
                alt="WiFi"
                className="w-6 h-6"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">WiFi Available</h3>
                <p>High-speed internet throughout the property</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="/path-to-wifi-icon.png"
                alt="WiFi"
                className="w-6 h-6"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">WiFi Available</h3>
                <p>High-speed internet throughout the property</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                src="/path-to-wifi-icon.png"
                alt="WiFi"
                className="w-6 h-6"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">WiFi Available</h3>
                <p>High-speed internet throughout the property</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[400px] p-4 bg-[#282828] mt-8 md:mt-0 md:ml-8 rounded-md">
          <h2 className="text-2xl text-white font-semibold mb-4">Booking Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date-from">
                Date From
              </label>
              <input
                type="date"
                id="date-from"
                name="date-from"
                className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="date-to">
                Date To
              </label>
              <input
                type="date"
                id="date-to"
                name="date-to"
                className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-lg text-white font-semibold">Total: $0.00</p>
            </div>
            <PrimaryButton>
              Book
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};
