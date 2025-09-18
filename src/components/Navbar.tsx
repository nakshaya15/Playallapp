import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSportsDropdown = () => {
    setIsSportsDropdownOpen(!isSportsDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenus = () => {
    setIsSportsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const activeLink = "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1";
  const normalLink = "hover:text-gray-300 transition-colors";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-transparent text-white lg:p-6">
      <div className="flex items-center space-x-2">
        <NavLink to="/" onClick={closeMenus}>
          <img
            src="/Playall-Logo.png"
            alt="Play All Logo"
            className="h-10 sm:h-12"
          />
        </NavLink>
      </div>

      <div className="hidden lg:flex items-center space-x-6">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Book Now
        </NavLink>
        <NavLink to="/schools" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Schools
        </NavLink>
        <NavLink to="/academy" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Academy
        </NavLink>
        <NavLink to="/membership" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Membership
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Events
        </NavLink>
        <NavLink to="/techsolutions" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Tech Solutions
        </NavLink>
        <NavLink to="/consultancy" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
          Consultancy
        </NavLink>

        <div className="relative">
          <button
            className="flex items-center hover:text-gray-300 transition-colors"
            onClick={toggleSportsDropdown}
          >
            Sports
            <svg className={`ml-1 w-4 h-4 transform transition-transform ${isSportsDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {isSportsDropdownOpen && (
            <div className="absolute bg-zinc-800 text-white shadow-lg rounded-md mt-2 w-48 py-2 top-full -left-8" onMouseLeave={toggleSportsDropdown}>
              <NavLink to="/badminton" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Badminton</NavLink>
              <NavLink to="/futsal" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Futsal (Mini-Football)</NavLink>
              <NavLink to="/box-cricket" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Box-Cricket (Gully Cricket)</NavLink>
              <NavLink to="/pickleball" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Pickle Ball</NavLink>
              <NavLink to="/table-tennis" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Table Tennis</NavLink>
            </div>
          )}
        </div>
      </div>

      <a href="#" className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors hidden md:inline-block">
        Contact Us
      </a>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="lg:hidden text-white focus:outline-none">
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-zinc-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40">
          <NavLink to="/" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Book Now
          </NavLink>
          <NavLink to="/schools" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Schools
          </NavLink>
          <NavLink to="/academy" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Academy
          </NavLink>
          <NavLink to="/membership" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Membership
          </NavLink>
          <NavLink to="/events" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Events
          </NavLink>
          <NavLink to="/techsolutions" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Tech Solutions
          </NavLink>
          <NavLink to="/consultancy" className="text-xl font-bold hover:text-gray-300" onClick={closeMenus}>
            Consultancy
          </NavLink>
          <div className="relative w-full text-center">
            <button
              className="flex items-center justify-center w-full text-xl font-bold hover:text-gray-300"
              onClick={toggleSportsDropdown}
            >
              Sports
              <svg className={`ml-2 w-4 h-4 transform transition-transform ${isSportsDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isSportsDropdownOpen && (
              <div className="bg-zinc-800 text-white shadow-lg rounded-md mt-4 w-48 mx-auto py-2">
                <NavLink to="/badminton" className="block px-4 py-2 hover:bg-zinc-700" onClick={closeMenus}>Badminton</NavLink>
                <NavLink to="/futsal" className="block px-4 py-2 hover:bg-zinc-700" onClick={closeMenus}>Futsal (Mini-Football)</NavLink>
                <NavLink to="/box-cricket" className="block px-4 py-2 hover:bg-zinc-700" onClick={closeMenus}>Box-Cricket (Gully Cricket)</NavLink>
                <NavLink to="/pickleball" className="block px-4 py-2 hover:bg-zinc-700" onClick={closeMenus}>Pickle Ball</NavLink>
                <NavLink to="/table-tennis" className="block px-4 py-2 hover:bg-zinc-700" onClick={closeMenus}>Table Tennis</NavLink>
              </div>
            )}
          </div>
          <a href="#" className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
