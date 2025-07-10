import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nQuery: ${formData.query}`;
    const whatsappUrl = `https://wa.me/919820587467?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', query: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col">
      <Header activePage="contact" />
      
      <main className="flex-grow pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Hero Section - Unchanged */}
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl p-6 md:p-10 mb-16 relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-cyan-900/30 border border-cyan-500/30 rounded-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Contact Us
              </span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              We're here to support your journey of transformation and growth. Reach out to us anytime.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { value: "24/7", label: "Support", gradient: "from-cyan-600 to-blue-700" },
                { value: "47,643", label: "Students Developed and counting...", gradient: "from-amber-600 to-yellow-600" },
                { value: "38", label: "Active companies association", gradient: "from-emerald-600 to-teal-600" }
              ].map((stat, index) => (
                <div key={index} className={`bg-gradient-to-r ${stat.gradient} rounded-2xl p-1`}>
                  <div className="bg-gray-900 rounded-xl p-5 flex flex-col items-center">
                    <span className="text-white text-2xl font-bold">{stat.value}</span>
                    <span className="text-blue-100 mt-2">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Information - Unchanged */}
          <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="h-0.5 bg-gradient-to-r from-gray-700 to-cyan-500 flex-grow mr-4"></div>
              <h2 className="text-cyan-400 text-xl font-semibold whitespace-nowrap">Get In Touch</h2>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-gray-700 flex-grow ml-4"></div>
            </div>
            
            <h3 className="text-white text-3xl font-bold mb-6">
              We'd Love to Hear From You
            </h3>
            
            <p className="text-blue-100 mb-8 text-lg">
              Whether you're looking to attend a workshop, join a course, or simply have a question—don't hesitate to reach out. 
              Our team at The Active Learning Company is ready to guide you every step of the way.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  value: "info@thealcworld.in"
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  value: "+91 98205 87467"
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Location",
                  value: "Mumbai, India"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-800/40 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 mr-4 flex-shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-cyan-300 text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl hover:border-cyan-500 transition-colors">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Business Hours
              </h3>
              <ul className="text-blue-100 space-y-3">
                {[
                  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { days: "Sunday", hours: "Closed" }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between py-2 border-b border-gray-700/50">
                    <span>{item.days}</span>
                    <span className="font-medium">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Form - Replaced with custom WhatsApp form */}
          <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="h-0.5 bg-gradient-to-r from-gray-700 to-amber-500 flex-grow mr-4"></div>
              <h2 className="text-amber-400 text-xl font-semibold whitespace-nowrap">Send a Message</h2>
              <div className="h-0.5 bg-gradient-to-r from-amber-500 to-gray-700 flex-grow ml-4"></div>
            </div>
            
            <h3 className="text-white text-3xl font-bold mb-6">
              Let's Start a Conversation
            </h3>
            
            {/* Custom WhatsApp Form Container */}
            <div 
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              id="whatsapp-contact-container"
            >
              <div className="flex-grow flex flex-col">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-6 py-3 rounded-lg font-bold">
                    Contact Form
                  </div>
                </div>
                
                {/* Custom WhatsApp Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="query" className="sr-only">Your Query</label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send via WhatsApp'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Section - Unchanged */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black rounded-2xl p-10 md:p-16 relative overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-5 py-2.5 rounded-lg mb-6 font-bold">
              Transform Your Learning Journey
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of students and professionals who have transformed their careers with our innovative learning programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;