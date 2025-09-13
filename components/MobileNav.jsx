import { Cross1Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function MobileNav({ setMenuOpen }) {
  return (
    <motion.div 
     initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="fixed top-0 right-0 h-screen bg-white dark:bg-gray-900 w-1/2 flex flex-col z-50">
      <div className="flex justify-end p-4">
        <button
          className="p-2 rounded-full bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40 text-white"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <Cross1Icon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col  gap-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-black dark:text-white w-full text-center text-lg font-semibold px-4 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default MobileNav;
