// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-200 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Column 1: Logo & Contact */}
        <div>
          <img
            src="https://thealcworld.in/wp-content/uploads/2022/07/ALC-Logo-e1747291827538.png"
            alt="ALC Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm">Contact us: +91 98205 87467</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.youtube.com/@niravpakai1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-...Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/activelearningcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-3.204 0-3.584...Z" />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1Zk8DyV0eKmGwbUswMql05pmcN2_2486a/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10...Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="/about-us" className="hover:text-accent">About Us</a>
          <a href="/contact-us" className="hover:text-accent">Contact Us</a>
          <a href="/courses" className="hover:text-accent">Webinars</a>
          <a href="/event" className="hover:text-accent">Events</a>
          <a href="/blogs" className="hover:text-accent">Blogs</a>
        </div>

        {/* Column 3: Shop & Policies */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="/shop" className="hover:text-accent">Shop</a>
          <a href="/privacy-policy" className="hover:text-accent">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-accent">Terms & Conditions</a>
          <a href="/returns-and-refunds" className="hover:text-accent">Returns & Refunds</a>
          <a href="/faqs" className="hover:text-accent">FAQ</a>
        </div>

        {/* Column 4: Gallery, Testimonials, My Account */}
        <div className="flex flex-col gap-2 text-sm">
          <a href="/gallery" className="hover:text-accent">Gallery</a>
          <a href="/testomonials" className="hover:text-accent">Testimonials</a>
          <a href="/alc-profile" className="hover:text-accent">My Account</a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-xs">
          © {new Date().getFullYear()} Active Learning Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
