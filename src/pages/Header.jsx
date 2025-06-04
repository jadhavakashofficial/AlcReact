import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileProfileDropdownOpen, setIsMobileProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIsMobileProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileProfileDropdown = (e) => {
    e.stopPropagation();
    setIsMobileProfileDropdownOpen(!isMobileProfileDropdownOpen);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 shadow-sm py-1 backdrop-blur-sm'
            : 'bg-transparent py-2'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link to="/" aria-label="Home" onClick={closeMobileMenu}>
                <img 
                  src="https://thealcworld.in/wp-content/uploads/2025/05/ALC-Logo-1.jpg" 
                  alt="ALC Logo"
                  className={`transition-all duration-300 rounded-lg ${
                    scrolled 
                      ? 'h-10 drop-shadow-sm' 
                      : 'h-12 drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.2)]'
                  }`}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <NavLink to="/about-us" scrolled={scrolled}>About Us</NavLink>
              <NavLink to="/courses" scrolled={scrolled}>Webinars</NavLink>
              <NavLink to="/gallery" scrolled={scrolled}>Gallery</NavLink>
              <NavLink to="/testomonials" scrolled={scrolled}>Testimonials</NavLink>
              <NavLink to="/contact-us" scrolled={scrolled}>Contact Us</NavLink>
              <a 
                href="https://thealcworld.in/shop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${scrolled ? 'text-gray-700 hover:text-accent' : 'text-white hover:text-gray-200'} px-3 py-2 font-medium transition-colors`}
              >
                Shop
              </a>
              
              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button 
                  onClick={toggleProfileDropdown}
                  className={`${scrolled ? 'text-gray-700 hover:text-accent' : 'text-white hover:text-gray-200'} px-3 py-2 font-medium flex items-center transition-colors`}
                >
                  My Profile
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                    >
                      <a 
                        href="https://thealcworld.in/alc-profile/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Profile
                      </a>
                      <a 
                        href="https://thealcworld.in/my-account/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Orders
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/courses"
                className={`ml-2 px-5 py-2 rounded-lg font-bold transition-all ${
                  scrolled
                    ? 'bg-accent text-white hover:bg-accent-dark shadow-md'
                    : 'bg-white/90 text-primary hover:bg-white shadow-md'
                }`}
              >
                Enroll Now
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed top-16 inset-x-0 z-40 bg-white/95 shadow-lg md:hidden backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3" onClick={closeMobileMenu}>
              <MobileNavLink to="/about-us">About Us</MobileNavLink>
              <MobileNavLink to="/courses">Webinars</MobileNavLink>
              <MobileNavLink to="/gallery">Gallery</MobileNavLink>
              <MobileNavLink to="/testomonials">Testimonials</MobileNavLink>
              <MobileNavLink to="/contact-us">Contact Us</MobileNavLink>
              <a 
                href="https://thealcworld.in/shop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors rounded-md"
              >
                Shop
              </a>
              
              {/* Mobile Profile Dropdown */}
              <div className="rounded-md overflow-hidden">
                <button 
                  onClick={toggleMobileProfileDropdown}
                  className="flex justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors rounded-md"
                >
                  <span>My Profile</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${isMobileProfileDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isMobileProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 bg-gray-50/50 rounded-b-md overflow-hidden"
                    >
                      <a 
                        href="https://thealcworld.in/alc-profile/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        My Profile
                      </a>
                      <a 
                        href="https://thealcworld.in/my-account/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-accent/10 hover:text-accent transition-colors rounded-b-md"
                      >
                        My Orders
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a
                href="#enroll"
                className="block w-full text-center mt-4 px-4 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-colors shadow-md"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Desktop NavLink Component
const NavLink = ({ to, children, scrolled }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md font-medium transition-colors relative ${
      scrolled 
        ? 'text-gray-700 hover:text-accent' 
        : 'text-white hover:text-gray-200'
    } after:content-[''] after:absolute after:bottom-1 after:left-3 after:w-[calc(100%-24px)] after:h-0.5 after:bg-accent
      after:opacity-0 after:transition-opacity after:duration-300
      hover:after:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50`}
    onClick={() => window.scrollTo({ top: 0 })}
  >
    {children}
  </Link>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-accent/10 hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
    onClick={() => window.scrollTo({ top: 0 })}
  >
    {children}
  </Link>
);