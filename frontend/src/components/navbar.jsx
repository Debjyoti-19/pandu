import { useState } from "react";
import pandaImg from "../media/panda.jpeg";
import { CircleUser } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenNav = () => setMenuOpen(true);
  const handleCloseNav = () => setMenuOpen(false);

  return (
    <>
      <div className="w-full bg-white pt-4 px-4 rounded-lg">
        <nav className="bg-gray-100 w-full border-b border-gray-200 rounded-lg shadow-md">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top row with image, menu, toggle, and CircleUser */}
            <div className="flex items-center justify-between h-16">
              {/* Image on extreme left */}
              <div className="flex-shrink-0 pt-10">
                <img
                  src={pandaImg}
                  className="object-cover rounded-full h-15 w-15 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-30 lg:w-30"
                  alt="Logo"
                />
              </div>

              {/* Centered menu */}
              <div className="lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                <a
                  href="#action1"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Home
                </a>
                <a
                  href="#action2"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Link
                </a>
                <a href="#" className="text-gray-400 cursor-not-allowed">
                  Disabled
                </a>
              </div>

              {/* Toggle and CircleUser on extreme right */}
              <div className="flex items-center space-x-4">
                <button
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  aria-label="Toggle menu"
                  onClick={handleOpenNav}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <CircleUser className="h-10 w-10" />
              </div>
            </div>

            {/* Search bar centered under the menu */}
            <div className="flex justify-center mt-4 pb-3">
              <form className="flex items-center space-x-2">
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="px-3 py-1 rounded-md border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-1 text-sm border border-green-600 text-green-600 rounded-md hover:bg-green-50"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed z-50 top-0 right-0 h-full w-1/2 bg-blue-500 bg-opacity-90 transition-transform duration-500 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={handleCloseNav}
              className="absolute top-5 right-10 text-white text-5xl font-thin focus:outline-none"
            >
              &times;
            </button>
            <div className="overlay-content flex flex-col items-center justify-center h-full space-y-8 text-white text-3xl font-light">
              <a href="#about" onClick={handleCloseNav}>
                About
              </a>
              <a href="#services" onClick={handleCloseNav}>
                Services
              </a>
              <a href="#clients" onClick={handleCloseNav}>
                Clients
              </a>
              <a href="#contact" onClick={handleCloseNav}>
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
