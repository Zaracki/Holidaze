import PrimaryButton from "../../comonents/PrimaryButton";

export const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#141414]">
        <div className="w-[632px] bg-[#282828] p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
          <form className="space-y-4">
            <div>
              <h2 className="text-lg text-white font-semibold">Your Email</h2>
              <input
                type="email"
                className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Password</h2>
              <input
                type="password"
                className="w-full p-2 mt-2 mb-8 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <PrimaryButton
              className="ml-0 w-full"
              type="submit">
                Login
              </PrimaryButton>
            </div>
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