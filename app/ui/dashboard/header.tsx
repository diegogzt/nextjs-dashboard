"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AcmeLogo from "@/app/ui/acme-logo";
import Link from "next/link";
import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { handleSignOut } from "@/app/lib/auth-actions";

interface DashboardHeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function DashboardHeader({
  onMenuToggle,
}: DashboardHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  return (
    <>
      {/* Header fijo en móvil */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center">
            <div className="w-8 h-8 text-lime-400">
              <AcmeLogo />
            </div>
            <span className="ml-2 text-white font-semibold">DashPilot</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Menú desplegable en móvil */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <div className="space-y-2">
              <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="pt-4 border-t border-gray-800">
              <form action={handleSignOut}>
                <button className="flex w-full items-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-300">
                  <PowerIcon className="w-5 h-5" />
                  <span>Cerrar Sesión</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Overlay para cerrar el menú */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
