"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => (
  <motion.div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-8 h-8 rounded-full bg-primary dark:bg-gray-800 flex items-center justify-center shadow-lg">
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </motion.div>
  </motion.div>
);

export default ScrollIndicator;
