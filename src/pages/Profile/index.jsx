import React from 'react';
import PrimaryButton from '../../comonents/PrimaryButton';

export const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-[632px] w-full mb-8">
        <h1 className="text-3xl font-medium mb-6">Profile</h1>
        <div className="bg-white p-6">
          <div className="flex items-center mb-6">
            <img
              src="/path-to-profile-image.png"
              alt="Profile"
              className="w-[100px] h-[100px] rounded-full bg-gray-300 object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Lilly Westwood</h2>
              <p className="text-gray-600">Host</p>
            </div>
          </div>
          <div className="text-center">
            <PrimaryButton>
              Change Image
            </PrimaryButton>
          </div>
        </div>
        <h2 className="text-3xl font-medium mb-4 mt-6">My bookings</h2>
        <hr className="mt-3 mb-6 border-gray-400" />
        <div className="max-w-[632px] w-full bg-white mb-8">
          <div className="flex items-center h-[200px] max-h-[200px]">
            <img
              src="src/assets/hero-image.png"
              alt="Details"
              className="w-[200px] h-[200px] object-cover"
            />
            <div className="ml-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">Booking Details</h2>
              <p className="text-gray-600 mb-1">Check-in: September 25, 2024</p>
              <p className="text-gray-600 mb-1">Check-out: September 30, 2024</p>
              <p className="text-gray-600 mb-1">Guests: 2</p>
              <p className="text-gray-600 mb-1">Total: $500.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
