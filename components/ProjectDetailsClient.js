"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProjectDetailsClient({ project }) {
  if (!project) {
    return <div className="text-center py-20 text-2xl">Project not found.</div>;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <h1 className="text-4xl font-bold mb-2 text-purple-700 dark:text-white">{project.title}</h1>
        <Image src={project.image} alt={project.title} width={800} height={256} className="w-full h-64 object-cover rounded-xl mb-4 border-2 border-purple-300 dark:border-gray-700" />
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{project.details}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-white border border-purple-300 dark:border-gray-700">{t}</span>
          ))}
        </div>
        <Button asChild variant="default" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold">
          <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </Button>
      </motion.div>
    </div>
  );
}
