import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import URBankLogo from "../assets/URB LOGO2.png";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
      setShowSearch(false);
      setQuery("");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div
        className="shadow-lg h-24 flex items-center justify-between px-4 z-50 relative bg-gradient-to-r"
        style={{
          backgroundImage:
            "linear-gradient(to right, #aef0f8, #6dbaf0, #4d8fd1)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={URBankLogo} alt="URBank Logo" className="h-12 w-auto" />
        </a>

        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button
            onClick={() => {
              setShowSearch(true); // show search bar
              setMenuOpen(false); // close hamburger menu
            }}
            className="text-[#051d40] print:hidden"
            aria-label="Toggle Search"
          >
            <i className="fas fa-search text-lg" />
          </button>

          {/* Hamburger Menu Toggle */}
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#051d40] print:hidden"
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

          {/* Close Button */}
          {menuOpen && (
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#051d40]"
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
        </div>
      </div>

      {/* Search Bar */}
      <div
        ref={searchRef}
        className={`bg-white px-4 transition-all duration-300 ${
          showSearch ? "h-16 py-2" : "h-0 overflow-hidden"
        }`}
      >
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center h-full"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#72cded]"
            autoFocus
          />
        </form>
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
