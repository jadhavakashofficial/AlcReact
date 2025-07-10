// src/pages/RefundPolicy.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: 'linear-gradient(to bottom right, #111827, #000, #111827)',
      color: '#dbeafe',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Particle background layer - moved behind content */}
      <div className="fixed inset-0 -z-10" style={{
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0) 20%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 30%)"
      }}></div>
      
      <Header />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{
          background: 'linear-gradient(to right, #1f2937, #111827, #1f2937)'
        }}>
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span style={{
                background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Returns & Refund Policy
              </span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
              Your space for learning, growth, and transformation through expert-led webinars and digital content.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-6 py-4 rounded-lg flex items-center" style={{
                background: 'linear-gradient(to right, #0891b2, #1d4ed8)'
              }}>
                <i className="fas fa-calendar-check text-amber-400 text-xl mr-3"></i>
                <div>
                  <p className="text-white text-sm">Effective Date</p>
                  <p className="text-cyan-300 font-medium">May 1, 2025</p>
                </div>
              </div>
              
              <div className="px-6 py-4 rounded-lg flex items-center" style={{
                background: 'linear-gradient(to right, #0891b2, #1d4ed8)'
              }}>
                <i className="fas fa-globe text-amber-400 text-xl mr-3"></i>
                <div>
                  <p className="text-white text-sm">Website</p>
                  <p className="text-cyan-300 font-medium">thealcworld.in</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="rounded-xl p-6 mb-12" style={{
                background: 'rgba(31, 41, 55, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                <div className="flex items-center mb-6">
                  <div style={{
                    background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
                    height: '2px',
                    width: '80px'
                  }}></div>
                  <h2 className="text-amber-400 text-2xl font-bold ml-4">Policy Overview</h2>
                </div>
                
                <p className="text-blue-100 mb-4">
                  Thank you for choosing The ALC World, your space for learning, growth, and transformation through expert-led webinars, insightful blogs, and value-driven digital content.
                </p>
                <p className="text-blue-100">
                  This Returns and Refund Policy explains the conditions under which purchases made on our website are considered final, and outlines any possible exceptions. We encourage all users to read this policy carefully before registering for a webinar or purchasing any service or digital product.
                </p>
              </div>
              
              {/* Policy Sections */}
              <div className="space-y-8">
                {/* Section 1 */}
                <div className="rounded-xl p-6" style={{
                  background: 'rgba(31, 41, 55, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3" style={{
                      background: '#06b6d4'
                    }}>1</div>
                    <h3 className="text-amber-400 text-xl font-bold">No Refunds: All Sales Are Final</h3>
                  </div>
                  
                  <p className="text-blue-100 mb-4">
                    Once a purchase has been made on The ALC World, whether for:
                  </p>
                  
                  <ul className="text-blue-100 list-disc list-inside space-y-2 mb-4 pl-4">
                    <li>A webinar ticket or access</li>
                    <li>A downloadable course or content</li>
                    <li>A paid resource</li>
                    <li>A consultation service (if offered in the future)</li>
                  </ul>
                  
                  <p className="text-blue-100">
                    <span style={{
                      background: 'linear-gradient(to right, #f59e0b, #fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '600'
                    }}>No refunds will be issued.</span> By completing a payment on our website, you acknowledge that you have read, understood, and agreed to this no-refund policy.
                  </p>
                </div>
                
                {/* Section 2 */}
                <div className="rounded-xl p-6" style={{
                  background: 'rgba(31, 41, 55, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3" style={{
                      background: '#06b6d4'
                    }}>2</div>
                    <h3 className="text-amber-400 text-xl font-bold">Why No Refunds?</h3>
                  </div>
                  
                  <p className="text-blue-100 mb-4">
                    Our strict no-refund policy is in place for the following reasons:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-cyan-400 mb-2">
                        <i className="fas fa-file-download text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Digital Nature of Products</h4>
                      <p className="text-blue-100 text-sm">Our webinars and content are digital and delivered via email links or virtual platforms. Once accessed, it cannot be "returned" in the conventional sense.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-cyan-400 mb-2">
                        <i className="fas fa-bolt text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Instant Access</h4>
                      <p className="text-blue-100 text-sm">Most of our products and webinars provide instant or live access. You gain access to exclusive content immediately after payment.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-cyan-400 mb-2">
                        <i className="fas fa-users text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Small-Scale Operations</h4>
                      <p className="text-blue-100 text-sm">We work with experts and plan webinars with limited seating. Your registration secures a spot and triggers a resource commitment on our side.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-cyan-400 mb-2">
                        <i className="fas fa-medal text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Integrity of Value</h4>
                      <p className="text-blue-100 text-sm">We stand behind the value of our sessions. The real benefit is based on your engagement and implementation of the knowledge provided.</p>
                    </div>
                  </div>
                </div>
                
                {/* Section 3 */}
                <div className="rounded-xl p-6" style={{
                  background: 'rgba(31, 41, 55, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3" style={{
                      background: '#06b6d4'
                    }}>3</div>
                    <h3 className="text-amber-400 text-xl font-bold">What If You Miss the Webinar?</h3>
                  </div>
                  
                  <p className="text-blue-100 mb-4">
                    If you registered for a webinar but:
                  </p>
                  
                  <ul className="text-blue-100 list-disc list-inside space-y-2 mb-4 pl-4">
                    <li>Forgot to attend</li>
                    <li>Faced last-minute issues</li>
                    <li>Lost access to the internet</li>
                  </ul>
                  
                  <p className="text-blue-100 mb-4">
                    We regret that we cannot issue refunds. However:
                  </p>
                  
                  <div className="p-4 rounded-lg border-l-4" style={{
                    background: 'linear-gradient(to right, rgba(8, 145, 178, 0.2), rgba(29, 78, 216, 0.2))',
                    borderColor: '#06b6d4'
                  }}>
                    <p className="text-cyan-300">
                      In most cases, recordings will be shared post-session (if explicitly mentioned at the time of purchase). You can email <span className="font-medium"> info@thealcworld.in</span> within 24 hours of the missed session, and we'll try our best to provide access to replays.
                    </p>
                  </div>
                </div>
                
                {/* Additional Sections */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Section 4 */}
                  <div className="rounded-xl p-6" style={{
                    background: 'rgba(31, 41, 55, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3" style={{
                        background: '#06b6d4'
                      }}>4</div>
                      <h3 className="text-amber-400 text-xl font-bold">Duplicate Payments</h3>
                    </div>
                    
                    <p className="text-blue-100 mb-4">
                      If you accidentally made a duplicate payment or your card was charged more than once:
                    </p>
                    
                    <ol className="text-blue-100 list-decimal list-inside space-y-2 pl-4">
                      <li>Send proof of transaction to info@thealcworld.in</li>
                      <li>We will verify within 3-5 business days</li>
                      <li>If confirmed, a full refund of duplicate amount will be processed</li>
                    </ol>
                  </div>
                  
                  {/* Section 7 */}
                  <div className="rounded-xl p-6" style={{
                    background: 'rgba(31, 41, 55, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3" style={{
                        background: '#06b6d4'
                      }}>7</div>
                      <h3 className="text-amber-400 text-xl font-bold">Non-Refundable Scenarios</h3>
                    </div>
                    
                    <p className="text-blue-100 mb-4">
                      We do NOT entertain refunds for:
                    </p>
                    
                    <ul className="text-blue-100 list-disc list-inside space-y-1 pl-4 text-sm">
                      <li>"I changed my mind after purchase"</li>
                      <li>"I didn't find the content useful"</li>
                      <li>"I missed the webinar and want a refund"</li>
                      <li>"I bought it by mistake"</li>
                      <li>"I was not aware of the no-refund policy"</li>
                      <li>"The session was too basic/advanced"</li>
                      <li>"I didn't receive a certificate" (unless promised)</li>
                    </ul>
                  </div>
                </div>
                
                {/* Section 8 */}
                <div className="rounded-xl p-6" style={{
                  background: 'rgba(31, 41, 55, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3" style={{
                      background: '#06b6d4'
                    }}>8</div>
                    <h3 className="text-amber-400 text-xl font-bold">Feedback & Quality Assurance</h3>
                  </div>
                  
                  <p className="text-blue-100 mb-4">
                    We deeply value our community's feedback. If you are dissatisfied:
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex-1 min-w-[200px] p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-amber-400 mb-2">
                        <i className="fas fa-envelope text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Email Feedback</h4>
                      <p className="text-blue-100 text-sm">Share constructive feedback at  info@thealcworld.in</p>
                    </div>
                    
                    <div className="flex-1 min-w-[200px] p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-amber-400 mb-2">
                        <i className="fas fa-tag text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Future Discounts</h4>
                      <p className="text-blue-100 text-sm">Your input may entitle you to future discounts</p>
                    </div>
                    
                    <div className="flex-1 min-w-[200px] p-4 rounded-lg" style={{ background: 'rgba(31, 41, 55, 0.3)' }}>
                      <div className="text-amber-400 mb-2">
                        <i className="fas fa-gift text-xl"></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">Bonus Materials</h4>
                      <p className="text-blue-100 text-sm">We may provide bonus materials at our discretion</p>
                    </div>
                  </div>
                  
                  <p className="text-blue-100">
                    Our intent is not only to educate but also to evolve. Your experience helps us improve future webinars and digital offerings.
                  </p>
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="rounded-xl p-8 mt-12 text-center" style={{
                background: 'linear-gradient(to bottom, #1f2937, #111827)',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                <h3 className="text-2xl font-bold text-white mb-2">Need Help? Contact Us</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  If you have questions about this policy or need clarification about a payment, we're here to help.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{
                      background: 'rgba(8, 145, 178, 0.3)'
                    }}>
                      <i className="fas fa-envelope text-cyan-300 text-xl"></i>
                    </div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto: info@thealcworld.in" className="text-cyan-300 hover:underline"> info@thealcworld.inm</a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{
                      background: 'rgba(8, 145, 178, 0.3)'
                    }}>
                      <i className="fas fa-globe text-cyan-300 text-xl"></i>
                    </div>
                    <p className="text-white font-medium">Website</p>
                    <a href="https://www.thealcworld.in" className="text-cyan-300 hover:underline">thealcworld.in</a>
                  </div>
                </div>
                
                <p className="text-blue-100 mt-6">
                  We aim to respond to queries within 48 hours, Monday to Saturday.
                </p>
              </div>
              
              {/* Closing Note */}
              <div className="text-center py-12">
                <p className="text-2xl font-bold text-white mb-4">Let's grow and learn—together.</p>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  The ALC World is built on trust, education, and respect. Our no-refund policy ensures we can continue to provide affordable, high-quality content while managing limited resources and digital delivery constraints.
                </p>
                <p className="text-amber-400 font-medium mt-6">
                  Thank you for understanding and supporting our mission.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Fixed: Wrapped Footer in higher z-index container */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default RefundPolicy;