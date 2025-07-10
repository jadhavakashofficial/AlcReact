// src/components/AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  const missionRef = useRef(null);
  const founderRef = useRef(null);
  const bookRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax'));
        const offset = scrollY * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen overflow-hidden">
      <Header />
      
      {/* Enhanced Hero Section with Full-width Image */}
      <div className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full filter blur-3xl animate-ping"></div>
          <div className="absolute top-1/3 left-2/3 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() > 0.5 ? '79, 70, 229' : '6, 182, 212'}, ${Math.random() * 0.4 + 0.1})`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
          
          <div className="absolute inset-0 bg-[url('https://assets.codepen.io/13471/holographic-gradient.jpg')] bg-cover opacity-10 mix-blend-overlay animate-holographic"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Redefining Success Through Transformative Learning
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                We empower boundary-breakers to transform potential into extraordinary impact through 
                cutting-edge strategies and spiritual alignment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#mission" 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden neon-ripple"
                >
                  Our Mission
                </a>
                <a 
                  href="/contact-us" 
                  className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 relative overflow-hidden neon-ripple"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative transform transition-all duration-700 hover:scale-[1.02] group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur-xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 overflow-hidden border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-500">
                  <div className="w-full h-80 rounded-xl overflow-hidden">
                    <img 
                      src="https://thealcworld.in/store/wp-content/uploads/2025/06/f5648e55-405c-49ce-8936-c2a1a3afaa5a.jpeg" 
                      alt="ALC Transformative Learning" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 px-4 relative" ref={missionRef}>
        <div className="absolute inset-0 bg-[url('https://assets.codepen.io/13471/wave-bg.svg')] bg-cover opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Our Guiding Principles
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The foundation of our transformative approach to learning and growth
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-cyan-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-gray-700 rounded-full mx-2"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-cyan-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group" data-parallax="0.05">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 h-full border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-indigo-600 to-cyan-700 p-3 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We empower ambitious individuals to unlock their full potential through transformative 
                  learning in academics, business, and leadership—paired with spiritual growth. For those 
                  who refuse to settle, we provide the tools to push boundaries and achieve extraordinary results.
                </p>
              </div>
            </div>
            
            <div className="relative group" data-parallax="0.03">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 h-full border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-amber-600 to-emerald-700 p-3 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  A world where driven individuals don't just pursue success—they redefine it. Through 
                  cutting-edge strategies, spiritual alignment, and bespoke mentorship, we equip you to 
                  rise faster, dream bigger, and leave a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Fixed for mobile */}
      <section id="founder" className="py-20 px-4 relative z-10" ref={founderRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Meet Our Founder
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The visionary behind Active Learning Company
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-amber-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-gray-700 rounded-full mx-2"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-amber-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-2/5 flex justify-center mb-8 lg:mb-0" data-parallax="0.04">
              <div className="rounded-2xl overflow-hidden border-4 border-indigo-500/30 shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 relative group w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity animate-pulse"></div>
                
                <div className="relative bg-gray-900 p-4 h-60 md:h-80 flex items-center justify-center">
                  <img 
                    src="https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_2534-scaled-e1749443475587.jpg" 
                    alt="Nirav Pakai" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-cyan-300">Nirav Pakai</h3>
                  <p className="text-blue-200">Founder & Chief Mentor</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">Transformational Mentor, Graphology Expert & Lifelong Educator</h3>
              
              <div className="space-y-4 text-blue-100">
                <p>
                  Nirav Pakai is on a mission to redefine learning as an active, empowering journey. As the Founder &
                  Chief Mentor of The ALC (Active Learning Company), he designs immersive experiences that help 
                  individuals and organisations unlock their highest potential.
                </p>
                <p>
                  With a unique fusion of corporate training expertise, leadership psychology, and spiritual wisdom, 
                  Nirav has guided thousands toward breakthrough growth.
                </p>
                <p>
                  Beyond the stage, Nirav wears multiple hats with passion:
                </p>
                <ul className="space-y-2 ml-6 list-disc text-cyan-300/80">
                  <li><span className="text-blue-100">A dedicated science teacher since 2004</span></li>
                  <li><span className="text-blue-100">Graphologist (Handwriting & Signature Analysis)</span></li>
                  <li><span className="text-blue-100">A relentless explorer of human potential</span></li>
                </ul>
                <p>
                  <span className="text-cyan-300 font-medium">8CL - The Eighth Colour Of Life</span>, distills decades of transformative lessons into a powerful
                  playbook designed to spark 1 Billion Smiles.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="/contact-us" 
                    className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden neon-ripple"
                  >
                    <span>Learn More About Nirav</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="/courses" 
                    className="inline-flex items-center bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-cyan-400/10 relative overflow-hidden neon-ripple"
                  >
                    <span>Book a Session</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 8 Colors of Life Section */}
      <section id="book" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-emerald-500/10 rounded-full filter blur-3xl animate-ping"></div>
          
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `rgba(245, 158, 11, ${Math.random() * 0.3 + 0.1})`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">
                The Eighth Colour Of Life
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Transformative Insights by Nirav Pakai
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-amber-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-gray-700 rounded-full mx-2"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-amber-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-2/5 flex justify-center mb-8 lg:mb-0">
              <div className="book-3d relative w-48 md:w-64 h-60 md:h-80 perspective-1000">
                <div className="relative w-full h-full preserve-3d transform rotate-y-15">
                  <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border-4 border-amber-500/20 glass-effect">
                    <img 
                      src="https://thealcworld.in/store/wp-content/uploads/2025/06/Screenshot-2025-06-09-at-10.13.36 AM.png" 
                      alt="The Eighth Colour Of Life" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
                  
                    </div>
                  </div>
                  
                  <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border-4 border-amber-500/20 rotate-y-180 glass-effect bg-gradient-to-br from-amber-900/70 via-amber-800/80 to-amber-900/70">
                    <div className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-amber-300 mb-4"></h3>
                      <ul className="space-y-2 text-amber-100">
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          <span>The 8 essential colors of life framework</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          <span>Practical tools for transformation</span>
                        </li>
                        <li className="flex items-start">
                          
                         
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/5 glass-card bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">A Revolutionary Framework for Personal Transformation</h3>
              
              <div className="space-y-4 text-blue-100">
                <p>
                  "Discover the profound connection between science and spirituality in this transformative workshop. Just as the seven colours blend into pure white light when in harmony, our emotions—when balanced with wisdom—create a life of positivity, peace, and purpose."
                </p>
                <p>
                  In this workshop, you'll explore:
                </p>
                <ul className="ml-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✨</span>
                    <span>The Science of Emotions – How thoughts and feelings shape your reality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✨</span>
                    <span>The Art of Emotional Harmony – Techniques to align your inner "colours" for clarity and joy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✨</span>
                    <span>The 8th Colour – Your Path to Wholeness – Uncover the missing key to inner transformation</span>
                  </li>
                </ul>
                <p>
                  Whether you seek resilience, self-mastery, or deeper happiness, this session will guide you to spin the disc of life with intention—turning chaos into calm and darkness into light.
                </p>
                <p>
                  "When emotions move with wisdom, they paint a life of peace."
                </p>
                
                {/* Enhanced Color Visualization */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-amber-200 mb-4">Transformational Markers:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'Purpose', color: 'from-purple-500 to-indigo-500' },
                      { name: 'Health', color: 'from-green-500 to-teal-500' },
                      { name: 'Relationships', color: 'from-pink-500 to-rose-500' },
                      { name: 'Wealth', color: 'from-yellow-500 to-amber-500' },
                      { name: 'Growth', color: 'from-cyan-500 to-blue-500' },
                      { name: 'Contribution', color: 'from-emerald-500 to-lime-500' },
                      { name: 'Spirituality', color: 'from-violet-500 to-purple-500' },
                      { name: 'Joy', color: 'from-orange-500 to-red-500' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br ${item.color} rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                      >
                        <div className="text-white font-bold">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="mt-6">
                  The book blends cutting-edge psychology, timeless wisdom, and practical exercises to guide 
                  readers in creating a vibrant, balanced, and purpose-driven life.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="https://thealcworld.in/store/product/8cl-the-eighth-colour-of-life/" 
                    className="inline-flex items-center bg-gradient-to-r from-amber-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 relative overflow-hidden neon-ripple"
                  >
                    <span>Get the Book</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="/courses" 
                    className="inline-flex items-center bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-amber-400/10 relative overflow-hidden neon-ripple"
                  >
                    <span>Join Workshop</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Our Core Values
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The principles that guide everything we do at ALC
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-emerald-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-gray-700 rounded-full mx-2"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-emerald-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Transformative Learning", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                ), 
                desc: "Redefining education as an active, empowering journey",
                color: "from-indigo-600 to-cyan-500"
              },
              { 
                title: "Spiritual Alignment", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ), 
                desc: "Integrating inner growth with professional development",
                color: "from-amber-500 to-emerald-500"
              },
              { 
                title: "Boundary-Breaking", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                desc: "Pushing limits to achieve extraordinary results",
                color: "from-emerald-500 to-teal-500"
              },
              { 
                title: "Community Impact", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ), 
                desc: "Creating lasting change through collective growth",
                color: "from-blue-600 to-indigo-600"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="h-64 perspective-1000 flip-card"
              >
                <div className="relative w-full h-full preserve-3d transition-all duration-700 flip-card-inner hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group">
                    <div className={`text-white mb-4 bg-gradient-to-r ${item.color} p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-center">{item.desc}</p>
                  </div>
                  
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 h-1 w-16 mx-auto mb-4 rounded-full"></div>
                      <p className="text-blue-100">Fundamental to our approach</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                number: "47,643", 
                label: " Students Developed...", 
                gradient: "from-indigo-400 to-cyan-400" 
              },
              { 
                number: "Since 2004", 
                label: " Decoding Potential and Leading Towards Leadership", 
                gradient: "from-amber-400 to-emerald-400" 
              },
              { 
                number: "461", 
                label: "Seminars & Workshops Conducted & Counting", 
                gradient: "from-cyan-400 to-emerald-500" 
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl font-bold mb-4">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    {stat.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-blue-100"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-cyan-900/20 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-6 text-sm font-bold">
            Ready to Transform?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of boundary-breakers who have unlocked extraordinary growth with ALC
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/courses" 
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-emerald-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/30 relative overflow-hidden liquid-morph"
            >
              Enroll Now
            </a>
            <a 
              href="/contact-us" 
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 relative overflow-hidden neon-ripple"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style jsx>{`
        @keyframes holographic {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-holographic {
          animation: holographic 15s ease infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .flip-card-inner {
          transform: rotateY(0deg);
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .neon-ripple {
          position: relative;
          overflow: hidden;
        }
        
        .neon-ripple:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0;
          border-radius: 100%;
          transform: scale(1, 1) translate(-50%);
          transform-origin: 50% 50%;
        }
        
        .neon-ripple:focus:after,
        .neon-ripple:hover:after {
          animation: ripple 1s ease-out;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0, 0);
            opacity: 1;
          }
          20% {
            transform: scale(25, 25);
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(40, 40);
          }
        }
        
        .liquid-morph {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .liquid-morph:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, rgba(245,158,11,0.8), rgba(16,185,129,0.8), rgba(217,119,6,0.8));
          z-index: -1;
          transition: transform 0.5s ease;
          transform: translate(-25%, -25%) rotate(0deg);
          border-radius: 40%;
          animation: liquid 6s linear infinite;
        }
        
        .liquid-morph:hover:before {
          transform: translate(-25%, -25%) rotate(360deg);
        }
        
        @keyframes liquid {
          0% {
            transform: translate(-25%, -25%) rotate(0deg);
          }
          100% {
            transform: translate(-25%, -25%) rotate(360deg);
          }
        }
        
        .book-3d {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
          transform-style: preserve-3d;
        }
        
        .book-3d .preserve-3d {
          animation: rotate3d 15s linear infinite;
        }
        
        @keyframes rotate3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        .glass-card {
          background: rgba(30, 41, 59, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(180, 83, 9, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }
        
        .glass-effect {
          backdrop-filter: blur(4px);
          background: rgba(30, 41, 59, 0.25);
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;