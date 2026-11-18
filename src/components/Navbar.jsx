import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaXmark } from "react-icons/fa6";

import logo from "../assets/images/rafmus-logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-blue-600 font-bold"
        : "text-[#0F2747] hover:text-blue-600"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex h-20 w-56 items-center overflow-hidden sm:w-64"
        >
          <img
            src={logo}
            alt="Rafmus Builders Consult"
            className="w-full scale-[1] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 font-semibold lg:flex">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden rounded-md bg-[#0F2747] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#1E5AA8] lg:block"
        >
          Request a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md bg-[#0F2747] p-3 text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">

          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `block border-b border-gray-200 py-4 ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-[#0F2747]"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block border-b border-gray-200 py-4 ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-[#0F2747]"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block border-b border-gray-200 py-4 ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-[#0F2747]"
                }`
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block border-b border-gray-200 py-4 ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-[#0F2747]"
                }`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-4 ${
                  isActive
                    ? "font-bold text-blue-600"
                    : "text-[#0F2747]"
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        <div className="px-6 pb-6">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block rounded-md bg-[#0F2747] py-4 text-center font-semibold text-white transition hover:bg-[#1E5AA8]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;