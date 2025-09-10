"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", percent: 90, color: "#61dafb" },
  { name: "Next.js", percent: 85, color: "#000" },
  { name: "Tailwind CSS", percent: 80, color: "#38bdf8" },
  { name: "Framer Motion", percent: 75, color: "#e70c7a" },
  { name: "shadcn/ui", percent: 70, color: "#6e56cf" },
  { name: "JavaScript", percent: 95, color: "#f7df1e" },
  { name: "TypeScript", percent: 80, color: "#3178c6" },
];


import { useEffect, useState } from "react";

const CircularSkill = ({ name, percent, color }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= percent) clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [percent]);
  const size = 120;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={radius} stroke="#eee" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size/2}
          cy={size/2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress / 100)}
          style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
        />
        <text x={size/2} y={size/2+8} textAnchor="middle" fontSize="28" fontWeight="bold" fill={color}>{progress}%</text>
      </svg>
      <span className="font-semibold text-base" style={{ color }}>{name}</span>
    </div>
  );
};

const About = () => (
  <section id="about" className="py-20 px-4 w-[90%] mx-auto bg-white dark:bg-gray-900 rounded-xl shadow">
  <motion.h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-600 via-sky-400 to-emerald-400 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-indigo-400 dark:via-gray-700 dark:to-gray-900" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      About Me
    </motion.h2>
  <motion.p className="mb-10 text-lg text-center text-muted-foreground dark:text-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      Experienced developer skilled in modern web technologies. Here are some of my top skills:
    </motion.p>
  <div className="flex flex-wrap gap-8 justify-center items-center dark:text-white">
      {skills.map(skill => (
        <CircularSkill key={skill.name} {...skill} />
      ))}
    </div>
  </section>
);

export default About;
