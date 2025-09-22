"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "AI Characters", href: "#ai" },
    { name: "How It Works", href: "#work" },
    { name: "Modules", href: "#modules" },
    { name: "FAQ", href: "#faq" },
  ];

  // Handle scroll for reverse scroll header
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background after scroll
      setScrolled(currentScrollY > 50);

      // Show only on reverse scroll
      if (currentScrollY < lastScrollY) {
        setShowHeader(true); // scrolling up
      } else {
        setShowHeader(false); // scrolling down
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "bg-[#111111]" : "bg-transparent"
      } ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center sm:px-6 px-4 h-16">
        {/* Logo */}
        <Link
          href="#home"
          className="sm:text-[34px] text-[20px] text-white font-bold tracking-widest"
        >
          PROJECT TOKYO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-8 text-[18px] tracking-tighter items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors uppercase ${
                pathname === link.href
                  ? "text-blue-500 underline"
                  : "text-white hover:text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://x.com/ProjectTokyoAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center xl:hidden z-[80]"
        >
          {isOpen ? (
            // Cross (X)
            <div className="relative w-6 h-6">
              <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-white rotate-45"></span>
              <span className="absolute left-0 top-1/2 w-6 h-[2px] bg-white -rotate-45"></span>
            </div>
          ) : (
            // Hamburger
            <div className="flex flex-col space-y-2">
              <span className="block w-7 h-[2px] bg-white"></span>
              <span className="block w-7 h-[2px] bg-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#111111] transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col justify-center space-y-6 p-6 min-h-[100vh] bg-[#111111]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors text-[24px] ml-10 font-bold ${
                pathname === link.href
                  ? "text-blue-500"
                  : "text-white hover:text-blue-500"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://x.com/ProjectTokyoAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors ml-10"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
