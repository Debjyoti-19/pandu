import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
  return (
    <div class="flex justify-center items-center flex-row bg-gray-200">
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
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {/* Use an icon library like Heroicons */}
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

            {/* Menu */}
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

            {/* Search Form */}
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
      </nav>
    </div>
  );
}

export default NavBar;
