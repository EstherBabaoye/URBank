import React from "react";
import URBankLogo from "../assets/URB LOGO2.png";

export default function Header2() {
  const navItems = [
    "Home",
    "Services",
    "About",
    "Projects",
    "Skills",
    "Contacts",
    "Pages",
  ];

  return (
    <header className="fixed top-8 w-full z-50 bg-white shadow-lg h-20 flex items-center justify-between px-4 lg:px-10">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img src={URBankLogo} alt="URBank Logo" className="h-16 w-auto" />
      </a>

      <p className="items-center text-sm text-[#051d40] font-bold justify-center">
        YOUR BANK, YOUR MONEY, YOUR FUTURE
      </p>

      {/* Search + CTA */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-[#051d40] hover:text-[#fbbf24]">
          <i className="fas fa-search text-lg" />
        </a>
        <button className="bg-[#72cded]  hover:text-[#fbbf24] text-sm text-[#051d40] font-semibold px-4 py-2 rounded">
          CONTACT US
        </button>
      </div>
    </header>
  );
}
