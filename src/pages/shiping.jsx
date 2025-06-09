import Header from './Header';
import Footer from './Footer';
import React, { useEffect } from 'react';

const ShippingPolicy = () => {
  useEffect(() => {
    // Initialize particle animation
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 150;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        shift: Math.random() * 0.05 + 0.01,
        color: `rgba(100, 200, 255, ${Math.random() * 0.4 + 0.1})`
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        particle.angle += particle.shift;
        
        // Reset position if out of bounds
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });
      
      requestAnimationFrame(drawParticles);
    }
    
    drawParticles();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Particle Animation Canvas */}
      <canvas 
        id="particle-canvas" 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      ></canvas>
      
      {/* Radial Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10" style={{
        background: 'radial-gradient(ellipse at center, rgba(0, 10, 20, 0.8) 0%, rgba(0, 0, 0, 0.9) 70%)'
      }}></div>
      
      {/* Imported Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-sm font-medium text-white backdrop-blur-sm">
            Shipping Information
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
              Shipping Policy
            </span>
          </h1>
          
          <p className="text-blue-200 max-w-3xl mx-auto text-xl mb-12">
            Transparent information about how we deliver your products
          </p>
          
          {/* Animated Divider */}
          <div className="relative max-w-md mx-auto h-1 mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>
          </div>
          
          {/* Floating Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Fast Delivery", 
                desc: "Across India in 3-7 days",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              { 
                title: "Global Reach", 
                desc: "International shipping available",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              { 
                title: "Secure Tracking", 
                desc: "Real-time updates on all orders",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              }
            ].map((card, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-amber-400/30 transition-all duration-500 transform hover:-translate-y-2 shadow-xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.5), rgba(2, 6, 23, 0.3))',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
                }}
              >
                <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-blue-200">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="relative z-20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphism Card */}
          <div 
            className="bg-gray-800/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.15)'
            }}
          >
            {/* Card Header */}
            <div className="p-8 border-b border-gray-700/50">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-amber-500 to-amber-300 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-white">Last updated: June 8, 2025</h2>
                  <p className="text-blue-200">Thank you for shopping with Active Learning Company</p>
                </div>
              </div>
            </div>
            
            {/* Policy Sections */}
            <div className="divide-y divide-gray-700/50">
              {policySections.map((section, index) => (
                <div key={index} className="p-8">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.icon} />
                      </svg>
                    </div>
                    <div className="ml-5 flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Card */}
          <div 
            className="mt-16 bg-gradient-to-r from-blue-700/80 to-indigo-800/80 rounded-3xl overflow-hidden border border-blue-500/30 backdrop-blur-lg shadow-2xl"
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(59, 130, 246, 0.3)'
            }}
          >
            <div className="p-10 flex flex-col md:flex-row items-center">
              <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-3xl font-bold text-white mb-4">Need Shipping Assistance?</h3>
                <p className="text-blue-100 max-w-xl">
                  Our support team is ready to help with any shipping-related questions or concerns you may have.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div 
                  className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-amber-400/20 shadow-xl"
                  style={{
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(245, 158, 11, 0.15)'
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-amber-300">Phone</h4>
                      <p className="text-xl font-semibold text-white">+91 98205 87467</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-amber-300">Email</h4>
                      <p className="text-xl font-semibold text-white">info@thealcworld.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Imported Footer */}
      <Footer />
    </div>
  );
};

// Policy sections data
const policySections = [
  {
    title: "Products Covered",
    icon: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    content: (
      <div>
        <p className="text-blue-200 mb-4">We offer shipping and delivery for the following:</p>
        <div className="space-y-3">
          {[
            "Physical Books (Hardcopy)",
            "eBooks (Instant Digital Delivery)",
            "Webinar Access (Online via Email/Platform)"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"></div>
              </div>
              <p className="ml-3 text-blue-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Shipping Methods",
    icon: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-8a1 1 0 00-1-1h-8.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 008.586 2H3z",
    content: (
      <div className="space-y-3">
        {[
          "All physical products are shipped through DTDC and trusted courier partners",
          "Digital products like eBooks and webinar access are delivered via email or direct platform access"
        ].map((item, idx) => (
          <div key={idx} className="flex items-start">
            <div className="flex-shrink-0 mt-1.5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"></div>
            </div>
            <p className="ml-3 text-blue-100">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Shipping Locations",
    icon: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    content: (
      <div>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-xl border border-gray-700">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
              <span className="text-amber-300 font-medium">IN</span>
            </div>
            <span className="ml-3 font-medium text-white">Across India</span>
          </div>
          <div className="flex items-center bg-gray-800/50 px-4 py-3 rounded-xl border border-gray-700">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="ml-3 font-medium text-white">International Shipping</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Order Processing & Delivery Time",
    icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
    content: (
      <div className="space-y-4 mt-4">
        <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center">
            <span className="font-medium text-white">Processing Time:</span>
            <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold">
              1-2 business days
            </span>
          </div>
        </div>
        <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-white">Delivery Time:</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-blue-200">Within India:</span>
              <span className="font-medium text-amber-300">3-7 business days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">International:</span>
              <span className="font-medium text-amber-300">7-14 business days</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Shipping Charges",
    icon: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    content: (
      <p className="text-blue-200">
        Shipping charges are calculated based on the delivery location and weight of the order. 
        Final shipping costs will be displayed during the checkout process.
      </p>
    )
  },
  {
    title: "Order Tracking",
    icon: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    content: (
      <div>
        <p className="text-blue-200 mb-4">
          Once your physical product is dispatched, you will receive:
        </p>
        <div className="space-y-3 mb-4">
          {[
            "A tracking number",
            "A link to track your shipment via email or SMS"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"></div>
              </div>
              <p className="ml-3 text-blue-100">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-blue-200">
          For digital products, the access link is shared instantly or within a few hours of order confirmation.
        </p>
      </div>
    )
  },
  {
    title: "Delays & Unforeseen Issues",
    icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    content: (
      <p className="text-blue-200">
        Please note that delivery may be delayed due to public holidays, weather conditions, 
        customs clearance, or other unforeseen circumstances. We will inform you proactively 
        in case of any such delay.
      </p>
    )
  },
  {
    title: "Returns, Refunds & Exchanges",
    icon: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 5H4zm5 6a1 1 0 10-2 0v2a1 1 0 102 0v-2zm4 0a1 1 0 10-2 0v2a1 1 0 102 0v-2z",
    content: (
      <div className="space-y-4">
        <p className="text-blue-200">
          Please refer to our <a href="/returns" className="text-amber-300 hover:text-amber-200 font-medium underline">Returns and Refund Policy</a> for detailed information.
        </p>
        <div className="space-y-3">
          {[
            "No exchanges or replacements are available",
            "Refunds are not provided unless specified under the return policy"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300"></div>
              </div>
              <p className="ml-3 text-blue-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export default ShippingPolicy;