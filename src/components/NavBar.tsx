const NavBar = () => {
  return (
    <nav className="fixed bg-slate-950 px-4 py-3 top-0 right-0 left-0 z-10 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-end">
        {/* add linkedin and github icons here */}
        <div></div>
        <ul className="space-x-6 font-medium text-slate-300 flex">
          <li>
            <a href="#about" className="hover:text-slate-600">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-slate-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-slate-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-slate-600">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-slate-950 px-4 py-3 shadow-md">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">
//         <div className="text-xl font-bold text-gray-800 dark:text-white">
//           MyPortfolio
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-800 dark:text-white"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//         <ul className="hidden space-x-6 font-medium text-gray-800 md:flex dark:text-white">
//           <li>
//             <a href="#about" className="hover:text-blue-500">
//               About Me
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:text-blue-500">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:text-blue-500">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-blue-500">
//               Contact Me
//             </a>
//           </li>
//         </ul>
//       </div>
//       {isOpen && (
//         <ul className="mt-2 space-y-2 font-medium text-gray-800 md:hidden dark:text-white">
//           <li>
//             <a href="#about" onClick={toggleMenu}>
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:text-blue-500">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#projects" onClick={toggleMenu}>
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#contact" onClick={toggleMenu}>
//               Contact Me
//             </a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

export default NavBar;
