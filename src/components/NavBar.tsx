import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-950 px-4 py-3 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          MyPortfolio
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <ul className="hidden space-x-6 font-medium text-gray-800 md:flex dark:text-white">
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="mt-2 space-y-2 font-medium text-gray-800 md:hidden dark:text-white">
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
