"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A modern web app built with Next.js and Tailwind CSS.",
    link: "#",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description: "Interactive UI with Framer Motion and shadcn/ui.",
    link: "#",
    tech: ["Framer Motion", "shadcn/ui"],
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 w-[90%] mx-auto bg-white dark:bg-gray-900 rounded-xl shadow">
    <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      Projects
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
