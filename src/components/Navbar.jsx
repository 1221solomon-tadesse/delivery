"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state
  const pathname = usePathname();

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "bg-black" : ""
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className={`${
                    pathname === "/properties" ? "bg-black" : ""
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Properties
                </Link>
                {isLoggedIn && (
                  <Link
                    href="/"
                    className={`${
                      pathname === "/properties/add" ? "bg-black" : ""
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            {/* Profile dropdown button */}
            {isLoggedIn ? (
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="/path/to/default/image.jpg" // Set a default image
                      alt="Profile"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>

                {isProfileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link
                      href="/profile"
                      className={`${
                        pathname === "/profile" ? "bg-black" : ""
                      } hover:bg-gray-900 block px-4 py-2 text-sm text-gray-700`}
                      role="menuitem"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/"
                      className={`${
                        pathname === "/properties/saved" ? "bg-black" : ""
                      } hover:bg-gray-900 block px-4 py-2 text-sm text-gray-700`}
                      role="menuitem"
                    >
                      Saved Properties
                    </Link>
                    <button
                      className="hover:bg-gray-900 block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      onClick={() => {
                        setIsLoggedIn(false); // Simulate sign out
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-black" : ""
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={`${
                pathname === "/properties" ? "bg-black" : ""
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Properties
            </Link>
            {isLoggedIn && (
              <Link
                href="/"
                className={`${
                  pathname === "/properties/add" ? "bg-black" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                Add Property
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
