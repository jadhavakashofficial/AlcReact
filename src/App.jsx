// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Webinars from './pages/Webinars';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import About from './pages/About';
import TermsAndConditions from './pages/termsandconditions';
import Returns from './pages/returns';
import Policy from './pages/Policy';
import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaFacebookF,
  FaRocket,
  FaBrain,
  FaAtom
} from 'react-icons/fa';

// Futuristic social media icons with gradient effects
const socialLinks = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/919820587467',
    title: 'Chat on WhatsApp',
    icon: <FaWhatsapp className="w-6 h-6" />,
    bg: 'from-green-400 to-emerald-600',
    pulse: 'shadow-green-500/50'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/classictechak/',
    title: 'LinkedIn',
    icon: <FaLinkedin className="w-6 h-6" />,
    bg: 'from-blue-500 to-indigo-700',
    pulse: 'shadow-blue-500/50'
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/activelearningcompany/',
    title: 'Instagram',
    icon: <FaInstagram className="w-6 h-6" />,
    bg: 'from-pink-500 to-rose-700',
    pulse: 'shadow-pink-500/50'
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/@niravpakai1',
    title: 'YouTube',
    icon: <FaYoutube className="w-6 h-6" />,
    bg: 'from-red-500 to-rose-800',
    pulse: 'shadow-red-500/50'
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/ALCNiravPakai',
    title: 'Facebook',
    icon: <FaFacebookF className="w-6 h-6" />,
    bg: 'from-blue-600 to-blue-800',
    pulse: 'shadow-blue-600/50'
  }
];

// Floating Social Media Carousel Component
const SocialMediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle automatic rotation
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % socialLinks.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % socialLinks.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentLink = socialLinks[currentIndex];

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tech aura effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
      
      {/* Floating indicator */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow-lg">
        <FaRocket className="inline mr-1 animate-bounce" /> Follow Us
      </div>

      {/* Main social button */}
      <a
        href={currentLink.href}
        target="_blank"
        rel="noopener noreferrer"
        title={currentLink.title}
        className={`
          relative flex items-center justify-center
          w-14 h-14 rounded-full text-white shadow-lg
          bg-gradient-to-br ${currentLink.bg}
          transform transition-all duration-300
          hover:scale-110 hover:shadow-xl
          ${isAnimating ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}
          ${isHovered ? 'shadow-xl ' + currentLink.pulse : ''}
          overflow-hidden
        `}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
        
        {/* Icon with 3D effect */}
        <div className="relative z-10 transform transition-transform group-hover:scale-110">
          {currentLink.icon}
        </div>
        
        {/* Notification dot */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
      </a>

      {/* Navigation controls */}
      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {socialLinks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === idx 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125' 
                  : 'bg-gray-400 opacity-50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Next button (hidden until hover) */}
      {isHovered && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-100 transition-all focus:outline-none"
          aria-label="Next social media"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Webinars />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testomonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      
      <SocialMediaCarousel />
    </>
  );
}

export default App;