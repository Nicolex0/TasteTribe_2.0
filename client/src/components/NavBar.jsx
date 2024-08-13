import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUser, FaSignInAlt, FaCaretDown } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileDropdownToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 z-50">
      <nav className="bg-customGreen text-white py-4 font-urbanist">
        <div className="container mx-auto flex justify-between items-center px-4 w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="TasteTribe Logo"
              className="h-8 mr-2"
            />
            <span className="text-xl font-bold">TasteTribe</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/aboutus" },
              { name: "RECIPES", path: "/recipes" },
              { name: "CONTACT US", path: "/contactus" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-400 ${
                    isActive ? "border-b-2 border-red-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Icons for larger screens */}
          <div className="hidden md:flex space-x-4 items-center">
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={handleProfileDropdownToggle}
                className="flex items-center hover:text-gray-400 focus:outline-none"
              >
                <FaUser size={24} />
                <FaCaretDown size={16} className="ml-1" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/myrecipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Recipes
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/signup"
              className="bg-white text-customGreen px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Toggle Menu and Search Icon for mobile */}
          <div className="flex space-x-4 md:hidden">
            <button onClick={handleMenuToggle} className="hover:text-gray-400">
              <FaBars size={24} />
            </button>
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={handleProfileDropdownToggle}
                className="flex items-center hover:text-gray-400 focus:outline-none"
              >
                <FaUser size={24} />
                <FaCaretDown size={16} className="ml-1" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/myrecipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Recipes
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/signup"
              className="bg-white text-customGreen px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition duration-300"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-customGreen md:hidden">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT US", path: "/aboutus" },
                { name: "RECIPES", path: "/recipes" },
                { name: "CONTACT US", path: "/contactus" },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-2 px-4 hover:bg-gray-700 ${
                      isActive ? "bg-gray-700" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
