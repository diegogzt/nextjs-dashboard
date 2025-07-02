"use client";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/ui/button";
import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import AcmeLogo from "@/app/ui/acme-logo";

import { useEffect, useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 py-6 px-6 border-b border-gray-800 shadow-2xl backdrop-blur-[30px] nav-fix-macos">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link
              className="text-2xl hover:scale-110 font-bold text-white transition-all duration-200 ease-in-out"
              href="/"
            >
              DashPilot
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#features"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Características
              </Link>
              <Link
                href="/#pricing"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Precios
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contacto
              </Link>
              <Link
                href="/login"
                className="px-5 py-2 rounded-md border border-gray-700 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200 font-medium shadow-sm"
              >
                Iniciar Sesión
              </Link>
            </div>
            <Button
              onClick={toggleMenu}
              className="md:hidden text-white bg-transparent hover:bg-gray-800 border-none shadow-none p-2"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <>
          <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-gray-900 border-b border-gray-800 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/#features"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-400 hover:text-white transition-all duration-300 py-2"
              >
                Características
              </Link>
              <Link
                href="/#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-400 hover:text-white transition-all duration-300 py-2"
              >
                Precios
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-400 hover:text-white transition-all duration-300 py-2"
              >
                Contacto
              </Link>
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-5 py-2 rounded-md border border-gray-700 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200 font-medium shadow-sm"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>

          {/* Overlay para cerrar el menú */}
          <div
            className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          />
        </>
      )}
    </>
  );
}
