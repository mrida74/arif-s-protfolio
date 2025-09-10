"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import ThemeToggle from "@/components/ThemeToggle";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import PortfolioLogo from "@/components/PortfolioLogo";
import PortfolioWatch from "@/components/PortfolioWatch";
import { Button } from "./ui/button";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md px-6 py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 flex items-center justify-between">
          <PortfolioLogo />
          <div className="flex-1 flex justify-center">
            {/* <PortfolioWatch /> */}
          </div>
        </div>
        <div className="flex items-center">
          {/* Desktop nav links */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-100 font-semibold px-3 py-1 rounded transition-colors duration-200 hover:bg-indigo-50 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-indigo-300"
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
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
            <Button
              className="ml-2 p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-indigo-200"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <HamburgerMenuIcon className="w-6 h-6" />
            </Button>
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
          className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white/95 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/90 z-50 flex flex-col shadow-2xl backdrop-blur-md border-l border-gray-100 dark:border-gray-800"
        >
          <div className="flex justify-end p-6">
            <button
              className="p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-indigo-200"
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
                className="text-gray-900 dark:text-gray-100 text-lg font-semibold px-4 py-2 rounded transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-gray-800 dark:hover:text-indigo-300"
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
