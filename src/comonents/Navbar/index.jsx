import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 h-16 px-4 flex items-center">
      <div className="container mx-auto max-w-[1152px] flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-white text-2xl font-bold">
          H
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden text-white" onClick={toggleMenu}>
          {/* Simple Hamburger Icon (can use Font Awesome or any icon library) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Navigation Links and Buttons for large screens */}
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <a href="#home" className="text-white hover:text-gray-400">
            Option 1
          </a>
          <a href="#about" className="text-white hover:text-gray-400">
            Option 2
          </a>
          <PrimaryButton>
            Login
          </PrimaryButton>
          <button className="h-[39px] px-[22px] py-2.5 ml-4 hover:bg-[#ad974f] justify-center items-center gap-2.5 inline-flex hover:text-white text-base font-bold font-['SF Pro'] tracking-widest border-2 border-[#dab674] hover:px-[20px] bg-transparent text-[#dab674] hover:border-none hover:px-[24px]">
            Register
          </button>
        </div>

        {/* Mobile Menu (shows when the hamburger is clicked) */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-white hover:text-gray-400 text-lg" onClick={toggleMenu}>
              Option 1
            </a>
            <a href="#about" className="text-white hover:text-gray-400 text-lg" onClick={toggleMenu}>
              Option 2
            </a>
            <button className="h-[39px] px-[22px] py-2.5 bg-[#ad974f] justify-center items-center gap-2.5 inline-flex text-white text-base font-bold font-['SF Pro'] tracking-widest hover:border-2 hover:border-[#dab674] hover:px-[20px] hover:bg-transparent hover:text-[#dab674]" onClick={toggleMenu}>
              Login
            </button>
            <button className="h-[39px] px-[22px] py-2.5 hover:bg-[#ad974f] justify-center items-center gap-2.5 inline-flex hover:text-white text-base font-bold font-['SF Pro'] tracking-widest border-2 border-[#dab674] hover:px-[20px] bg-transparent text-[#dab674] hover:border-none hover:px-[24px]" onClick={toggleMenu}>
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
