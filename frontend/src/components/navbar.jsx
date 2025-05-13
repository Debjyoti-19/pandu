import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenNav = () => setMenuOpen(true);
  const handleCloseNav = () => setMenuOpen(false);

  return (
    <div className="flex justify-center items-center flex-row bg-gray-200">
      <nav className="bg-gray-100 w-full border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <a href="#" className="text-xl font-bold text-gray-700">
              Navbar Scroll
            </a>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
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
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <a href="#action1" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#action2" className="text-gray-700 hover:text-blue-600">
                Link
              </a>

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600">
                  Link ▾
                </button>
                <div className="absolute hidden group-hover:block bg-white border shadow-md mt-1 py-2 w-48">
                  <a
                    href="#action3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Action
                  </a>
                  <a
                    href="#action4"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Another action
                  </a>
                  <hr className="my-1 border-gray-200" />
                  <a
                    href="#action5"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Something else here
                  </a>
                </div>
              </div>

              <a href="#" className="text-gray-400 cursor-not-allowed">
                Disabled
              </a>
            </div>

            {/* Search Form (Desktop Only) */}
            <form className="hidden lg:flex items-center space-x-2">
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

        {/* Fullscreen Overlay for Mobile Menu */}
        <div
          className={` fixed z-50 top-0 right-0 h-full w-1/2 bg-blue-500 bg-opacity-90 transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={handleCloseNav}
            className="absolute top-10 right-20 text-white text-5xl font-thin focus:outline-none"
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
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className=" flex flex-col items-center justify-center px-3 py-1 rounded-md border border-black-300 bg-black-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-1 text-sm border border-green-600 text-green-600 rounded-md hover:bg-green-50"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
