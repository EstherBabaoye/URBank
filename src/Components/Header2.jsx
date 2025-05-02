import React from 'react';

export default function Header2() {
  const navItems = ['Home', 'Services', 'About', 'Projects', 'Skills', 'Contacts', 'Pages'];

  return (
    <header className="fixed top-12 w-full z-50 bg-white shadow-lg h-16 flex items-center justify-between px-4 lg:px-10">
{/* Logo */}
      <a href="#" className="flex items-center">
        <img
          src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
          alt="URBank Logo"
          className="h-12 w-auto"
        />
      </a>

      {/* Search + CTA */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-black">
          <i className="fas fa-search text-lg" />
        </a>
        <button className="bg-black hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded">
          Contact Me
        </button>
      </div>
    </header>
  );
}
