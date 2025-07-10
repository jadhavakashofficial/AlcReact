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
import ShippingPolicy from './pages/shiping';
import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaFacebookF
} from 'react-icons/fa';

const socialLinks = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/919820587467',
    title: 'WhatsApp',
    icon: <FaWhatsapp className="w-4 h-4" />,
    bg: 'from-green-400 to-emerald-600'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/nirav-pakai-974170181/',
    title: 'LinkedIn',
    icon: <FaLinkedin className="w-4 h-4" />,
    bg: 'from-blue-500 to-indigo-700'
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/activelearningcompany/',
    title: 'Instagram',
    icon: <FaInstagram className="w-4 h-4" />,
    bg: 'from-pink-500 to-rose-700'
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/@niravpakai1',
    title: 'YouTube',
    icon: <FaYoutube className="w-4 h-4" />,
    bg: 'from-red-500 to-rose-800'
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/ALCNiravPakai',
    title: 'Facebook',
    icon: <FaFacebookF className="w-4 h-4" />,
    bg: 'from-blue-600 to-blue-800'
  }
];

const SocialMediaLinks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % socialLinks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentLink = socialLinks[currentIndex];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Desktop View - Compact vertical stack */}
      <div className="hidden md:flex flex-col space-y-2">
        {socialLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.title}
            className={`
              flex items-center justify-center
              w-9 h-9 rounded-full text-white
              bg-gradient-to-br ${link.bg}
              transition-transform hover:scale-110
              shadow-md
            `}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Mobile View - Single rotating icon */}
      <div className="md:hidden">
        <a
          href={currentLink.href}
          target="_blank"
          rel="noopener noreferrer"
          title={currentLink.title}
          className={`
            flex items-center justify-center
            w-9 h-9 rounded-full text-white
            bg-gradient-to-br ${currentLink.bg}
            shadow-md
          `}
        >
          {currentLink.icon}
        </a>
      </div>
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
        <Route path="/shipping" element={<ShippingPolicy />} />
      </Routes>
      
      <SocialMediaLinks />
    </>
  );
}

export default App;