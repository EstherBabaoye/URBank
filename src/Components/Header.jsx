import React from 'react';

export default function Header() {
  const navItems = ['Home', 'Personal', 'Business', 'Corporate', 'About Us'];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#72cded] shadow-lg h-8 flex items-center justify-center px-4 lg:px-10">
      <nav>
        <ul className="flex space-x-10 font-semibold text-base lg:text-sm uppercase">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`relative group transition-all duration-200 ${
                  item === 'text-[#051d40]'
                }`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded bg-gray-300 group-hover:bg-[#fbbf24]"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
