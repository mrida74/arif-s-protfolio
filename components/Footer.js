import React from "react";

const Footer = () => (
  <footer className="w-full text-center py-4 text-muted-foreground bg-background border-t dark:bg-gray-900 dark:text-gray-400">
    &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
  </footer>
);

export default Footer;
