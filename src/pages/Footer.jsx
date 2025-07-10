// src/pages/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(4140);
  
  // More realistic visitor counter simulation
  useEffect(() => {
    // Set initial count based on time of day
    const now = new Date();
    const hour = now.getHours();
    const baseCount = 4140 + Math.floor((hour / 24) * 300);
    setVisitorCount(baseCount);

    const interval = setInterval(() => {
      setVisitorCount(prevCount => {
        // More realistic visitor pattern:
        // - Higher probability of increase during daytime
        // - Small chance of decrease
        const hourFactor = Math.max(0, 1 - Math.abs(12 - hour) / 12);
        const changeProbability = 0.7 + (hourFactor * 0.2);
        
        if (Math.random() < changeProbability) {
          // Increase during peak hours
          const increment = Math.floor(Math.random() * 4) + 1;
          return prevCount + increment;
        } else {
          // Occasional decrease
          const decrement = Math.random() < 0.3 ? 1 : 0;
          return Math.max(4100, prevCount - decrement);
        }
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo & Contact */}
          <div>
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              className="mb-6"
            >
              <img
                src="https://thealcworld.in/store/wp-content/uploads/2025/06/cropped-ALC-Logo.png"
                alt="ALC Logo"
                className="h-14 bg-white p-2 rounded-lg"
              />
            </motion.div>
            <p className="text-sm mb-4">
              Transforming education through active learning methodologies and
              innovative teaching approaches.
            </p>
            <p className="text-sm font-medium mb-2">
              <span className="text-accent mr-2">✆</span> +91 98205 87467
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon
                href="https://www.youtube.com/@niravpakai1"
                icon="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                label="YouTube"
              />
              <SocialIcon
                href="https://www.instagram.com/activelearningcompany"
                icon="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                label="Instagram"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
              <FooterLink to="/courses">Webinars</FooterLink>
              <FooterLink to="/blogs">Blogs</FooterLink>
            </ul>
          </div>

          {/* Column 3: Shop & Policies */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Policies
            </h3>
            <ul className="space-y-3">
              {/* Added Shipping Policy link */}
              <FooterLink to="/shipping">Shipping Policy</FooterLink>
              <FooterLink href="https://thealcworld.in/store/shop/">Shop</FooterLink>
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
              <FooterLink to="/returns">Returns & Refunds</FooterLink>
              <FooterLink to="/policy">Privacy Policy</FooterLink>
              <FooterLink to="/shipping">Shipping Policy</FooterLink>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent">
              Resources
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/testomonials">Testimonials</FooterLink>
              <FooterLink href="https://thealcworld.in/store/my-account/">My Account</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {currentYear} Active Learning Company. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Developed by{" "}
                <a 
                  href="https://www.linkedin.com/in/classictechak/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Akash Jadhav
                </a>
              </p>
            </div>
            
            {/* Visitor Counter - Fixed with realistic fluctuations */}
            <div className="my-4 md:my-0">
              <div className="flex items-center justify-center bg-gray-800 rounded-full px-4 py-2">
                <div className="relative w-3 h-3 mr-2">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400 mr-1">Live Visitors:</span>
                <motion.span 
                  key={visitorCount}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-medium text-accent"
                >
                  {visitorCount.toLocaleString()}
                </motion.span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex space-x-6">
              <FooterLink to="/terms">Terms</FooterLink>
              <FooterLink to="/returns">Refunds</FooterLink>
              <FooterLink to="/policy">Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ to, href, children }) => (
  <li>
    {to ? (
      <Link
        to={to}
        className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group"
      >
        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group"
        target={href?.startsWith("http") ? "_blank" : "_self"}
        rel={href?.startsWith("http") ? "noopener noreferrer" : ""}
      >
        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        {children}
      </a>
    )}
  </li>
);

const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-accent relative group"
    aria-label={label}
  >
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={icon} />
    </svg>
    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {label}
    </span>
  </motion.a>
);