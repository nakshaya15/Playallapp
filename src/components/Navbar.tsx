import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);

  const toggleSportsDropdown = () => {
    setIsSportsDropdownOpen(!isSportsDropdownOpen);
  };

  const activeLink = "hover:text-gray-300 transition-colors font-semibold border-b-2 border-orange-500 pb-1";
  const normalLink = "hover:text-gray-300 transition-colors";

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-transparent text-white">
      <div className="flex items-center space-x-2">
        {/* Replaced text with image logo */}
        <img 
          src="/Playall-Logo.png" // Path to your logo image
          alt="Play All Logo" 
          className="h-10 cursor-pointer" // Adjust height as needed, add cursor-pointer if it's clickable
        />
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
          
          <div className={`absolute ${isSportsDropdownOpen ? 'block' : 'hidden'} bg-zinc-800 text-white shadow-lg rounded-md mt-2 w-48 py-2 top-full -left-8`}>
            <NavLink to="/badminton" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Badminton</NavLink>
            <NavLink to="/futsal" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Futsal (Mini-Football)</NavLink>
            <NavLink to="/box-cricket" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Box-Cricket (Gully Cricket)</NavLink>
            <NavLink to="/pickleball" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Pickle Ball</NavLink>
            <NavLink to="/table-tennis" className="block px-4 py-2 hover:bg-zinc-700" onClick={toggleSportsDropdown}>Table Tennis</NavLink>
          </div>
        </div>
      </div>

      <a href="#" className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 transition-colors hidden md:inline-block">
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;