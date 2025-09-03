'use client'
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Add toast notification here
  };

  return (
  <section id="contact" className="py-20 px-4 flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full max-w-lg">
        <Card className="p-8 shadow-2xl bg-white/90 dark:bg-gray-900 backdrop-blur rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 dark:text-white text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="bg-white/80 dark:bg-gray-800 dark:text-white" />
            <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="bg-white/80 dark:bg-gray-800 dark:text-white" />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={4} className="bg-white/80 dark:bg-gray-800 dark:text-white border rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold dark:bg-gradient-to-r dark:from-purple-900 dark:to-gray-800">Send Message</Button>
            {submitted && <div className="text-green-600 mt-2 text-center">Thank you for contacting!</div>}
          </form>
          <div className="flex gap-6 mt-8 justify-center">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-purple-700 dark:text-white font-bold">Twitter</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-purple-700 dark:text-white font-bold">GitHub</a>
            <a href="mailto:your@email.com" className="hover:text-pink-500 text-purple-700 dark:text-white font-bold">Email</a>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactForm;
