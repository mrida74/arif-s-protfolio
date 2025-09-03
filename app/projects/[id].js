"use client";
import React from "react";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";

// Example project data (replace with real data or fetch from API)
const projects = [
  {
    id: "project-one",
    title: "Project One",
    description: "A modern web app built with Next.js and Tailwind CSS.",
    details: "This project showcases a beautiful UI, fast performance, and best practices in React and Next.js.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
    image: "/project1.jpg"
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "Interactive UI with Framer Motion and shadcn/ui.",
    details: "Advanced animations and component design using Framer Motion and shadcn/ui.",
    tech: ["Framer Motion", "shadcn/ui"],
    link: "#",
    image: "/project2.jpg"
  },
];

export default function Page({ params }) {
  const { id } = params;
  const project = projects.find(p => p.id === id);
  return <ProjectDetailsClient project={project} />;
}
