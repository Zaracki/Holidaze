import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-16 px-4 flex items-center">
      <div className="container mx-auto max-w-[1152px] flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          H
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <a href="#home" className="text-white hover:text-gray-400">
            Option 1
          </a>
          <a href="#about" className="text-white hover:text-gray-400">
            Option 2
          </a>
        </div>
        <button className="h-[39px] px-[22px] py-2.5 ml-4 bg-[#ad974f] justify-center items-center gap-2.5 inline-flex text-white text-base font-bold font-['SF Pro'] tracking-widest hover:border-2 hover:border-[#dab674] hover:px-[20px] hover:bg-transparent hover:text-[#dab674]">
          Login
        </button>
        <button className="h-[39px] px-[22px] py-2.5 ml-4 hover:bg-[#ad974f] justify-center items-center gap-2.5 inline-flex hover:text-white text-base font-bold font-['SF Pro'] tracking-widest border-2 border-[#dab674] hover:px-[20px] bg-transparent text-[#dab674] hover:border-none hover:px-[24px]">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
