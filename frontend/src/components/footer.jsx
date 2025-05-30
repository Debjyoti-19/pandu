import React from "react";

function Footer() {
  return (
    <>
      {/* ...existing code... */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
          <p className="text-sm">Follow us on social media:</p>
        </div>
          <div className="flex justify-center space-x-4 py-2">
            <a href="#" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Instagram
            </a>
          </div>
        
      </footer>
    </>
  );
}

export default Footer;
