import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import URBankLogo from "../assets/URB LOGO2.png";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", icon: "🏠" },
    { label: "PERSONAL", icon: "👤" },
    { label: "BUSINESS", icon: "💼" },
    { label: "CORPORATE", icon: "🏢" },
    { label: "ABOUT US", icon: "ℹ️" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Navbar with Logo and Close Button */}
      <div
  className="shadow-lg h-24 flex items-center justify-between px-4 z-50 relative bg-gradient-to-r"
  style={{ backgroundImage: 'linear-gradient(to right, #aef0f8, #6dbaf0, #4d8fd1)' }}
>

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={URBankLogo} alt="URBank Logo" className="h-12 w-auto" />
        </a>

        {/* Close Button */}
        {menuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#051d40] focus:outline-none"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Hamburger Toggle */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="text-[#051d40] focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Slide-in Menu */}
      <Transition
        show={menuOpen}
        enter="transition-transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 overflow-y-auto pt-24">
          <ul className="flex flex-col px-6 pb-8 space-y-6 divide-y divide-gray-200 font-bold text-base">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-4 text-gray-800 hover:text-yellow-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 text-xl rounded-full w-10 h-10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}
