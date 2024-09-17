import React, { useState } from 'react';
import PrimaryButton from '../../comonents/PrimaryButton';
import { API_URL_REGISTER } from '../../common/Constants';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    imageUrl: '',
    venueManager: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const registerData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      avatar: {
        url: formData.imageUrl,
        alt: `${formData.name}'s avatar`,
      },
      venueManager: formData.venueManager,
    };

    try {
      const response = await fetch(`${API_URL_REGISTER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      setSuccess(true);
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#141414]">
        <div className="w-[632px] bg-[#282828] p-8">
          <h1 className="text-3xl font-bold mb-6 text-white">Sign Up</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-lg text-white font-semibold">Name</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold">Email</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold">Password</h2>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold">Image URL</h2>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="venueManager"
                name="venueManager"
                checked={formData.venueManager}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="venueManager" className="ml-2 text-white">
                I want to be a venue manager
              </label>
            </div>
            <div className="mt-8">
              <PrimaryButton className="ml-0 w-full" type="submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Create account'}
              </PrimaryButton>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">Registration successful!</p>}
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