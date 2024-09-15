import React, { useState } from 'react';
import PrimaryButton from '../../comonents/PrimaryButton';

export const Register = () => {
  const [isVenueManager, setIsVenueManager] = useState(false);

  const handleCheckboxChange = () => {
    setIsVenueManager(!isVenueManager);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#141414]">
        <div className="w-[632px] bg-[#282828] p-8">
          <h1 className="text-3xl font-bold mb-6 text-white">Sign Up</h1>
          <form className="space-y-4">
            <div>
              <h2 className="text-lg text-white font-semibold">Name</h2>
              <input
                type="text"
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold">Email</h2>
              <input
                type="email"
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold">Password</h2>
              <input
                type="password"
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold">Image URL</h2>
              <input
                type="text"
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="venueManager"
                checked={isVenueManager}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="venueManager" className="ml-2 text-white">
                I want to be a venue manager
              </label>
            </div>
            <div className="mt-8">
              <PrimaryButton className="ml-0 w-full" type="submit">
                Create account
              </PrimaryButton>
            </div>
            <p className="text-[#D2D2D2] mt-4">
              Already have an account?{' '}
              <a href="#" className="text-white hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
