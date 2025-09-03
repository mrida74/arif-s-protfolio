
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import ScrollIndicator from "@/components/ScrollIndicator";

import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
      {/* Fixed social icon bar */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-center">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <FaFacebookF className="w-5 h-5 md:w-8 md:h-8" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <FaInstagram className="w-5 h-5 md:w-8 md:h-8" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-gray-700 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <FaGithub className="w-5 h-5 md:w-8 md:h-8" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <FaLinkedinIn className="w-5 h-5 md:w-8 md:h-8" />
        </a>
      </div>
      <Navbar />
      <main className="flex-1 flex flex-col gap-16">
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
