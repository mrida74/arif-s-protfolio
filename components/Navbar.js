"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import ThemeToggle from "@/components/ThemeToggle";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import PortfolioLogo from "@/components/PortfolioLogo";
import PortfolioWatch from "@/components/PortfolioWatch";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md px-6 py-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-between">
          <PortfolioLogo />
          <div className="flex-1 flex justify-center">
            <PortfolioWatch />
          </div>
        </div>
        <div className="flex items-center">
          {/* Desktop nav links */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white dark:text-white font-semibold hover:text-orange-200 dark:hover:text-purple-300 transition-colors duration-200"
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>
          </div>
      </div>
    </div>
  {/* Mobile menu overlay */}
  {menuOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/90 z-50 flex flex-col shadow-2xl backdrop-blur-md"
        >
          <div className="flex justify-end p-6">
            <button
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <Cross1Icon className="w-6 h-6" />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col items-center gap-8 mt-10"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
