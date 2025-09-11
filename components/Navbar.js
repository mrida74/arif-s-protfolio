"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    // Added "bg-white" to the main nav element for the overall page background
    <motion.nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md px-6 py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <PortfolioLogo />
          {/* <PortfolioWatch /> */}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-100 font-semibold px-3 py-1 rounded-full transition-colors duration-200 hover:bg-indigo-50 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-indigo-300"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <HamburgerMenuIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
         <div className="bg-black">
           <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            // Changed background to "bg-white" to make it opaque white
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs  z-50 flex flex-col shadow-2xl border-l border-gray-200 dark:border-gray-700 rounded-l-lg  "
          >
            <div className="flex justify-end p-6">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Cross1Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "tween", duration: 0.3 }}
              className="flex flex-col items-center gap-y-6 mt-8 px-4 "
            >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-full text-center text-gray-800 dark:text-gray-100 text-lg font-medium py-3 rounded-md transition-all duration-200 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-indigo-300"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
         </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;