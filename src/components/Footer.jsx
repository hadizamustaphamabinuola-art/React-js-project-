import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import logo from "../assets/images/rafmus-logo.svg";
import { Link } from "react-router";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081A30] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        </div>
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="flex h-20 w-60 items-center overflow-hidden"
          >
            <img
              src={logo}
              alt="Rafmus Builders Consult"
              className="w-full scale-[1] object-contain"
            />
          </a>

          <p className="mt-5 leading-7 text-gray-300">
            Professional construction, renovation, project management, and
            building consultancy services.
          </p>
        </div>

        {/* Links */}
        <div>
                  <h3 className="text-lg font-bold">
                      Quick Links
                  </h3>
                  <ul className="mt-6 space-y-3 text-gray-300">
                      <li>
                          <Link to="/" className="transition hover:text-blue-300">
                              Home
                          </Link>
                      </li>

                      <li>
                          <Link to="/about" className="transition hover:text-blue-300">
                              About
                          </Link>
                      </li>

                      <li>
                          <Link to="/services" className="transition hover:text-blue-300">
                              Services
                          </Link>
                      </li>

                      <li>
                          <Link to="/projects" className="transition hover:text-blue-300">
                              Projects
                          </Link>
                      </li>

                      <li>
                          <Link to="/contact" className="transition hover:text-blue-300">
                              Contact
                          </Link>
                      </li>
                  </ul>


        {/* Services */}
        <div>
          <h3 className="text-lg font-bold">
            Services
          </h3>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>Building Construction</li>
            <li>Renovation</li>
            <li>Project Management</li>
            <li>Site Supervision</li>
            <li>Cost Estimation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">
            Get in Touch
          </h3>

          <div className="mt-6 space-y-3 text-gray-300">
            <p>Lagos, Nigeria</p>

            <a
              href="tel:+2348032168432"
              className="block transition hover:text-blue-300"
            >
              +234 8032168432
            </a>

            <a
              href="mailto:rbclimited05@gmail.com"
              className="block transition hover:text-blue-300"
            >
              rbclimited05@gmail.com
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center bg-white/10 transition hover:bg-blue-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center bg-white/10 transition hover:bg-blue-600"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center bg-white/10 transition hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {2026} Rafmus Builders Consult. All rights reserved.
          </p>

          <p>
            Building with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;