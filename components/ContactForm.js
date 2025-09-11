'use client'
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        // Optionally show success toast
        alert("Message sent successfully!");
      } else {
        // Optionally show error toast
        setSubmitted(false);
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      setSubmitted(false);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
  <section id="contact" className="py-20 px-4 flex justify-center items-center min-h-[60vh]  dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full max-w-lg">
        <Card className="p-8 shadow-2xl bg-white/90 dark:bg-gray-900 backdrop-blur rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 dark:text-white text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="bg-white/80 dark:bg-gray-800 dark:text-white " />
            <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="bg-white/80 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={4} className="bg-white/80 dark:bg-gray-800 dark:text-white border rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold dark:bg-gradient-to-r dark:from-purple-900 dark:to-gray-800">Send Message</Button>
            {submitted && <div className="text-green-600 mt-2 text-center">Thank you for contacting!</div>}
          </form>
          <div className="flex gap-8 mt-8 justify-center">
            <div className="flex flex-col items-center">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FaFacebookF className="w-6 h-6 text-blue-600 dark:text-white" />
              </Link>
              <span className="mt-2 text-xs font-semibold text-blue-600 dark:text-white">Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FaInstagram className="w-6 h-6 text-pink-500 dark:text-white" />
              </Link>
              <span className="mt-2 text-xs font-semibold text-pink-500 dark:text-white">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <Link href="https://linkedin.com/in/arif-mrida" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FaLinkedinIn className="w-6 h-6 text-blue-700 dark:text-white" />
              </Link>
              
              <span className="mt-2 text-xs font-semibold text-blue-700 dark:text-white">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center">
              <Link href="https://github.com/mrida74" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FaGithub className="w-6 h-6 " />
            </Link>
            <span className="mt-2 text-xs font-semibold text-blue-700 dark:text-white">GitHub</span>
          </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactForm;
