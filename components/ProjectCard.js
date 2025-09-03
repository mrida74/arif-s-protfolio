"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const ProjectCard = ({ title, description, link, tech }) => (
  <motion.div
    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
    className="transition-transform duration-300"
  >
    <Card className="p-7 flex flex-col gap-5 rounded-2xl shadow-xl bg-gradient-to-br from-purple-600/80 via-pink-500/80 to-orange-400/80 text-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg dark:text-white">{title}</h3>
      <p className="mb-2 text-white/90 drop-shadow dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 border border-white/30 shadow dark:bg-gray-800 dark:border-gray-700">{t}</span>
        ))}
      </div>
      <Button asChild variant="default" className="bg-white text-purple-700 font-bold hover:bg-purple-100">
        <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </Button>
    </Card>
  </motion.div>
);

export default ProjectCard;
