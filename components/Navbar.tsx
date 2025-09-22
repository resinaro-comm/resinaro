"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Accessibility: close on ESC, trap focus
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-[#F9F6F1] shadow-md border-b-4 border-green-900 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand */}
          <Link href="/" className="text-2xl font-bold text-green-900">
            Resinaro
            <div className="h-1 w-20 mt-1 flex">
              <div className="flex-1 bg-green-700"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/about" className="hover:text-red-700">About</Link>
            <Link href="/contact" className="hover:text-red-700">Contact</Link>
            <Link href="/services" className="hover:text-red-700">Services</Link>
            <Link href="/community" className="hover:text-red-700">Community</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        >
          <aside
            ref={drawerRef}
            className="fixed top-8 right-0 min-w-max bg-white shadow-lg z-50 px-8 py-6 flex flex-col space-y-6 transition-transform duration-300 ease-in-out mt-8 rounded-b-2xl"
            style={{ height: 'auto' }}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-900"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl">✕</span>
            </button>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-red-700">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-red-700">Contact</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-red-700">Services</Link>
            <Link href="/community" onClick={() => setIsOpen(false)} className="hover:text-red-700">Community</Link>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
