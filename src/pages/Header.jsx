// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-end gap-6 px-6 py-4 transition-colors duration-500 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href="/about-us" className={scrolled ? 'text-gray-800' : 'text-white'}>
        About Us
      </a>
      <a href="/courses" className={scrolled ? 'text-gray-800' : 'text-white'}>
        Webinars
      </a>
      <a href="/gallery" className={scrolled ? 'text-gray-800' : 'text-white'}>
        Gallery
      </a>
      <a href="/testomonials" className={scrolled ? 'text-gray-800' : 'text-white'}>
        Testimonials
      </a>
      <a href="/contact-us" className={scrolled ? 'text-gray-800' : 'text-white'}>
        Contact Us
      </a>
      <a
        href="https://thealcworld.in/shop/"
        target="_blank"
        rel="noopener noreferrer"
        className={scrolled ? 'text-gray-800' : 'text-white'}
      >
        Shop
      </a>
      <a
        href="https://thealcworld.in/alc-profile/"
        target="_blank"
        rel="noopener noreferrer"
        className={scrolled ? 'text-gray-800' : 'text-white'}
      >
        My Profile
      </a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#"
        className={`ml-4 px-4 py-2 border-2 rounded-lg font-semibold transition ${
          scrolled
            ? 'border-accent text-accent hover:bg-accent hover:text-white'
            : 'border-white text-white hover:bg-white hover:text-primary'
        }`}
      >
        Enroll Now
      </motion.a>
    </motion.header>
  );
}
