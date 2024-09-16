import React from 'react';
import PrimaryButton from '../../comonents/PrimaryButton';

export const Venue = () => {
  return (
    <div className="flex flex-col max-w-[1152px] mx-auto md:flex-row justify-center items-start p-10">
      <div className="flex-1 max-w-full md:max-w-[1156px]">
        {/* Existing content on the left */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Birchwood</h1>
          <p className="text-lg text-gray-700">Bergen, Norway</p>
          <div className="flex items-center mt-4">
            <div className="w-[45px] h-[45px] bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Lilly Westwood</h2>
              <p className="text-gray-600">Host</p>
            </div>
          </div>
          <hr />
          <p className="text-gray-700 mt-2">
            Indulge in the elegance of our luxurious apartment, where sophisticated design meets modern comfort. This spacious retreat offers stunning views, top-tier amenities, and exquisite furnishings, providing the perfect blend of style and convenience. Whether you're here for business or leisure, every detail has been thoughtfully curated to ensure a truly unforgettable stay.
          </p>
          <hr />
          <div className="flex items-center mt-4">
            <img
              src="/path-to-wifi-icon.png"
              alt="WiFi"
              className="w-6 h-6"
            />
            <div className="ml-4">
              <h3 className="text-lg font-medium">WiFi Available</h3>
              <p className="text-gray-600">High-speed internet throughout the property</p>
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
              <p className="text-gray-600">High-speed internet throughout the property</p>
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
              <p className="text-gray-600">High-speed internet throughout the property</p>
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
              <p className="text-gray-600">High-speed internet throughout the property</p>
            </div>
          </div>
        </div>
      </div>
      {/* New box with input fields and button */}
      <div className="w-full md:w-[400px] p-4 bg-white shadow-lg rounded-md mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date-from">
              Date From
            </label>
            <input
              type="date"
              id="date-from"
              name="date-from"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date-to">
              Date To
            </label>
            <input
              type="date"
              id="date-to"
              name="date-to"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Total: $0.00</p>
          </div>
          <PrimaryButton>
            Book
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};
