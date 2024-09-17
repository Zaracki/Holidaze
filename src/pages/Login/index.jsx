import { API_URL_LOGIN } from "../../common/Constants";
import PrimaryButton from "../../comonents/PrimaryButton";
import React, { useState } from 'react';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch(`${API_URL_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      localStorage.setItem('user', JSON.stringify(data.data));

      setSuccess(true);
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#141414]">
        <div className="w-[632px] bg-[#282828] p-8">
          <h1 className="text-3xl font-bold mb-6 text-white">Sign in</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-lg text-white font-semibold">Your Email</h2>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Password</h2>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 mb-8 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <PrimaryButton className="ml-0 w-full" type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign in'}
              </PrimaryButton>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">Login successful!</p>}
            <p className="text-[#D2D2D2] mt-4">
              Don’t have an account yet?{' '}
              <a href="#" className="text-white hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;