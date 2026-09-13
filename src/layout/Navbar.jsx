import React, { useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm w-full">
      {/* Desktop & Mobile Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Kiri: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
            >
              <Building2 className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                Ayahandakos
              </span>
            </Link>
          </div>

          {/* Kanan: Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/find"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium text-sm transition"
            >
              <span>Cari Kost</span>
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium text-sm transition"
            >
              <span>Pusat Bantuan</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium text-sm transition"
            >
              <span>Tentang Website</span>
            </Link>
          </div>

          {/* Mobile Menu Button*/}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pb-4">
            <Link
              href="/find"
              className="p-3 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 flex items-center gap-3"
            >
              Cari Kost
            </Link>

            <Link
              href="/help"
              className="p-3 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 flex items-center gap-3"
            >
              Pusat Bantuan
            </Link>

            <Link
              href="/about"
              className="p-3 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 flex items-center gap-3"
            >
              Tentang Website
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
