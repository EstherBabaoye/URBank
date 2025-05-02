import React from 'react';

export default function Header() {
  const navItems = ['Home', 'Services', 'About', 'Projects', 'Skills', 'Contacts', 'Pages'];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-400 shadow-lg h-12 flex items-center justify-between px-4 lg:px-10">

      {/* Nav Links */}
      <nav className="flex-1 ml-8">
        <ul className="flex space-x-6 font-semibold text-base lg:text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`relative group transition-all duration-200 ${
                  item === 'Home' ? 'text-yellow-500' : 'text-gray-800'
                }`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out rounded bg-gray-300 group-hover:bg-yellow-400"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="hidden xl:flex items-center space-x-3 mr-6">
        {['twitter', 'facebook-f', 'linkedin-in', 'instagram'].map((icon, idx) => (
          <a
            key={idx}
            href="#"
            className="border p-2 rounded-full hover:shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-0.5"
          >
            <i className={`fab fa-${icon} text-sm`} />
          </a>
        ))}
      </div>


    </header>
  );
}
