
"use client";
import { motion } from "framer-motion";

export default function ProjectSectionTitle() {
  return (
    <motion.h2
      className="text-3xl font-bold mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>
  );
}
