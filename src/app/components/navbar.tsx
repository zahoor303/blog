"use client";
import Link from "next/link";
import { useState } from "react";
import Home from "../page";
import About from "../about/page";
import Contact from "../contact/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rose-300 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <li className="text-2xl font-bold hover:text-blue-300 transition">
                Food Blog
              </li>
            </Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/">
                <li className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
                  About
                </li>
              </Link>
              <Link href="/posts">
                <li className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
                  Posts
                </li>
              </Link>
              <Link href="/contact">
                <li className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
                  Contact
                </li>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-start md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about">
              <li className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition">
                About
              </li>
            </Link>
            <Link href="/posts">
              <li className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition">
                Posts
              </li>
            </Link>
            <Link href="/contact">
              <li className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition">
                Contact
              </li>
            </Link>
            <Home/>
            <About/>
         <Contact/>
          </div>
        </div>
      )}
    </nav>
  );
}
