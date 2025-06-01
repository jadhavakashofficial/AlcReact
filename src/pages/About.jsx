import React, { useEffect } from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                ALC
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Active Learning Company</h3>
            <p className="text-gray-400 text-sm">
              Empowering individuals to unlock their full potential through transformative learning and mentorship.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">info@thealcworld.in</li>
              <li className="text-gray-400 text-sm">+91 1234567890</li>
              <li className="text-gray-400 text-sm">Mumbai, India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 Active Learning Company. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full filter blur-3xl animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative transform transition-all duration-700 hover:scale-[1.02]">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
                <div className="relative bg-gray-800 rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://img.freepik.com/free-vector/group-people-working-together_52683-28615.jpg?w=1380&t=st=1694291389~exp=1694291989~hmac=0e5e2c4b9f94b5c2f5b4a7d3c2f7d3c5a3b5d3b7a3b5d3b7a3b5d3b7a3b5d3b7a3b" 
                    alt="Team Collaboration"
                    className="w-full h-auto object-cover rounded-xl transform transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Redefining Success Through Transformative Learning
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                We empower boundary-breakers to transform potential into extraordinary impact through 
                cutting-edge strategies and spiritual alignment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#mission" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Our Mission
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-transparent border-2 border-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Our Guiding Principles
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The foundation of our transformative approach to learning and growth
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We empower ambitious individuals to unlock their full potential through transformative 
                  learning in academics, business, and leadership—paired with spiritual growth. Our tailored 
                  programs, immersive workshops, and personalized mentorship cultivate confidence, 
                  high-performance mindsets, and actionable success strategies. For those who refuse to 
                  settle, we provide the tools to push boundaries and achieve extraordinary results.
                </p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-700 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-800 p-3 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-indigo-500 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  A world where driven individuals don't just pursue success—they redefine it. Through 
                  cutting-edge strategies, spiritual alignment, and bespoke mentorship, ALC equips you to 
                  rise faster, dream bigger, and leave a lasting impact. Join a community of boundary-breakers 
                  and ignite your journey to unparalleled growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Meet Our Founder
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The visionary behind Active Learning Company
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="founder-image-container lg:w-2/5">
              <div className="rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src="https://thealcworld.in/wp-content/uploads/2025/05/16.jpg" 
                  alt="Nirav Pakai" 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-purple-300">Nirav Pakai</h3>
                  <p className="text-gray-300">Founder & Chief Mentor</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">Transformational Mentor, Graphology Expert & Lifelong Educator</h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Nirav Pakai is on a mission to redefine learning as an active, empowering journey. As the Founder &
                  Chief Mentor of The ALC (Active Learning Company), he designs immersive experiences that help 
                  individuals and organisations unlock their highest potential.
                </p>
                <p>
                  With a unique fusion of corporate training expertise, leadership psychology, and spiritual wisdom, 
                  Nirav has guided thousands toward breakthrough growth—both professionally and personally.
                </p>
                <p>
                  A sought-after speaker and workshop conductor, Nirav's approach bridges science and self-awareness, 
                  blending pragmatic strategies with soulful introspection. His insights have reshaped mindsets across 
                  industries, proving that true success begins with intentional learning.
                </p>
                <p>
                  Beyond the stage, Nirav wears multiple hats with passion:
                </p>
                <ul className="space-y-2 ml-6 list-disc text-purple-300/80">
                  <li><span className="text-gray-300">A dedicated science teacher since 2004, fostering curiosity in future innovators</span></li>
                  <li><span className="text-gray-300">A Graphologist (Handwriting, Signature & Drawing Analysis) since 2010</span></li>
                  <li><span className="text-gray-300">A relentless explorer of human potential through books, workshops, and conversations</span></li>
                </ul>
                <p>
                  His debut book, <span className="text-purple-300 font-medium">The 8CL</span>, distills decades of transformative lessons into a powerful
                  playbook designed to spark 1 Billion Smiles. When not mentoring or writing, Nirav
                  thrives on cooking, hiking, and traveling—often pausing to quietly sip coffee in a cozy
                  corner, reflecting on his belief that growth happens where knowledge meets joy.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="https://thealcworld.in/about-us/" 
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <span>Learn More About Nirav</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://thealcworld.in/courses/" 
                    className="inline-flex items-center bg-transparent border-2 border-purple-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-purple-500/10"
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
      
      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Our Core Values
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do at ALC
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
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
                desc: "Redefining education as an active, empowering journey" 
              },
              { 
                title: "Spiritual Alignment", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ), 
                desc: "Integrating inner growth with professional development" 
              },
              { 
                title: "Boundary-Breaking", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                desc: "Pushing limits to achieve extraordinary results" 
              },
              { 
                title: "Community Impact", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ), 
                desc: "Creating lasting change through collective growth" 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-300 group-hover:text-purple-300 transition-colors mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of boundary-breakers who have unlocked extraordinary growth with ALC
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
            >
              Explore Our Programs
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;