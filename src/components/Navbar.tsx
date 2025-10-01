import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, } from 'lucide-react';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    'block px-3 py-2 rounded-md text-base lg:text-sm font-medium transition-colors duration-200';

  const getLinkClass = (isActive: boolean) =>
    `${linkBase} ${
      isActive
        ? 'text-primary-600 bg-primary-50'
        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
    }`;

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src="/wakmaLogo.png"
                alt="Wakma Gas logo"
                className="h-9 w-9 object-contain select-none"
                draggable={false}
              />
              <span className="text-2xl font-bold text-primary-800">Wakma Gas</span>
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
            className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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