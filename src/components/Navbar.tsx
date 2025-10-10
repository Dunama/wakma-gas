import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, } from 'lucide-react';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    'block px-3 py-3 rounded-md text-base lg:text-sm font-medium transition-colors duration-200';

  const getLinkClass = (isActive: boolean) =>
    `${linkBase} ${
      isActive
        ? 'text-primary-600 bg-primary-50'
        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
    }`;

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center h-20 md:h-24">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src="/wakmaLogo.png"
                alt="Wakma Gas logo"
                className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain select-none"
                draggable={false}
              />
              <span className="text-3xl md:text-4xl font-bold text-primary-800 leading-none">Wakma Gas</span>
            </NavLink>
          </div>

          {/* Desktop nav (>= lg) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-4">
              <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
                Home
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => getLinkClass(isActive)}>
                Services
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => getLinkClass(isActive)}>
                About
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => getLinkClass(isActive)}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* Hamburger button (mobile & tablet) */}
          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-md p-3 md:p-3.5 text-gray-700 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7 md:h-8 md:w-8" /> : <Menu className="h-7 w-7 md:h-8 md:w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      <div id="mobile-menu" className={`lg:hidden border-t ${open ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-1 bg-white shadow-md">
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => getLinkClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => getLinkClass(isActive)}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => getLinkClass(isActive)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => getLinkClass(isActive)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;