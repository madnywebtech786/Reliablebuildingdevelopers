"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";

const navItems = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT", href: "/about-us" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Home Renovation", href: "#" },
      { name: "Basement Renovation", href: "#" },
      { name: "Basement Lemination", href: "#" },
      { name: "Kitchen Remodeling", href: "#" },
      { name: "Bathroom Remodeling", href: "#" },
      { name: "Flooring", href: "#" },
      { name: "Interior", href: "#" },
      { name: "Gaurage Development", href: "#" },

      {
        name: "Other Services",
        href: "#",
        dropdown: [
          { name: "Framing", href: "#" },
          { name: "electrical", href: "#" },
        ],
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isSticky ? "shadow-md py-4" : "py-3"
      }`}
    >
      <div className=" px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={"/images/logo.png"}
              width={100}
              height={80}
              className="w-32 h-20"
            />
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium uppercase transition-colors hover:text-primary-red ${
                      item.active ? "text-primary-red" : "text-dark-text"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  {item.dropdown && (
                    /* FIRST-LEVEL DROPDOWN */
                    <ul
                      className="absolute left-0 top-full mt-4 w-52 bg-white shadow-lg rounded-md py-3
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       transition-all duration-300 transform group-hover:translate-y-0 translate-y-2
                       first-level-dropdown"
                    >
                      {item.dropdown.map((subItem) => (
                        /* sub-item is NOT a Tailwind `group` for controlling its submenu */
                        <li key={subItem.name} className="relative sub-item ">
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-5 py-2 text-sm text-gray-text hover:bg-light-background hover:text-primary-red"
                            aria-haspopup={!!subItem.dropdown}
                            aria-expanded={
                              subItem.dropdown ? "false" : undefined
                            }
                          >
                            <span>{subItem.name}</span>

                            {subItem.dropdown && (
                              <svg
                                className="ml-2 h-3 w-3 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </Link>

                          {/* SECOND-LEVEL DROPDOWN — controlled by CSS :hover on .sub-item */}
                          {subItem.dropdown && (
                            <ul
                              className="absolute left-full top-0 ml-2 w-max bg-white shadow-lg rounded-md py-3
                               submenu"
                            >
                              {subItem.dropdown.map((subSub) => (
                                <li key={subSub.name}>
                                  <Link
                                    href={subSub.href}
                                    className="block px-5 py-2 text-sm text-gray-text hover:bg-light-background hover:text-primary-red"
                                  >
                                    {subSub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#" className="hidden lg:block ml-4">
              <div
                className="bg-primary text-white font-semibold text-sm py-[14px] px-8 transition-all duration-300 hover:bg-dark-text"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                }}
              >
                Call Now
              </div>
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-in fade-in-20 slide-in-from-top-4 duration-300">
          <nav className="py-4">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-200">
                  <Link
                    href={item.href}
                    className="flex justify-between items-center px-6 py-3 text-sm font-medium uppercase hover:text-primary-red transition-colors"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {/* Note: Mobile dropdowns would need separate state logic for expansion */}
                </li>
              ))}
            </ul>
            <div className="px-6 py-4">
              <Link href="#">
                <div
                  className="bg-primary-red text-white font-semibold text-sm py-[14px] px-8 w-full text-center"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                  }}
                >
                  Order Now
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
