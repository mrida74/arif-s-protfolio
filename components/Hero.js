"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function TypewriterName({ name }) {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    let timeout;
    if (!isDeleting && idx < name.length) {
      timeout = setTimeout(() => {
        setDisplay(name.slice(0, idx + 1));
        setIdx(idx + 1);
      }, 120);
    } else if (isDeleting && idx > 0) {
      timeout = setTimeout(() => {
        setDisplay(name.slice(0, idx - 1));
        setIdx(idx - 1);
      }, 80);
    } else if (!isDeleting && idx === name.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && idx === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 600);
    }
    return () => clearTimeout(timeout);
  }, [name, idx, isDeleting]);
  return (
    <motion.h1
      className="text-5xl font-extrabold mb-4 drop-shadow-lg dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Hi, I&apos;m <span className="text-orange-300 dark:text-purple-400">{display}</span>
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
}

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-12">
      {/* Left side: Details */}
      <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 flex flex-col justify-center items-start text-white dark:text-gray-100">
        <TypewriterName name="Afroja Jahan" />
        <p className="text-lg mb-8 max-w-md drop-shadow dark:text-gray-300">
          Creative Full Stack Developer specializing in modern web experiences. Passionate about building beautiful, performant, and accessible products.
        </p>
        <div className="flex gap-4 mt-auto">
          <Button variant="default" size="lg" className="bg-white text-purple-700 font-bold hover:bg-purple-100 dark:bg-gray-900 dark:text-purple-300 dark:hover:bg-gray-800">
            <a href="/cv.pdf" download>Download CV</a>
          </Button>
          <Button variant="secondary" size="lg" className="bg-purple-700 text-white font-bold hover:bg-purple-800 dark:bg-purple-900 dark:text-white dark:hover:bg-purple-800">
            <a href="#about">About Me</a>
          </Button>
        </div>
      </motion.div>
      {/* Right side: Professional photo */}
      <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 flex justify-center items-center">
        <Image
          src="/profile.jpg"
          alt="Professional Photo"
          width={256}
          height={256}
          className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl bg-white dark:border-gray-700 dark:bg-gray-900"
        />
      </motion.div>
    </div>
  </section>
);



export default Hero;
