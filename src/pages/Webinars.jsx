import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Webinars = () => {
  // Reordered seminars as requested
  const seminars = [
    {
      title: "8 Colors Of Life",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/1-8CL-C.png",
      content: "Our Emotions are symbolized by seven colours and their varied shades. Blending these colours of emotions in a prudent and thoughtful proportion can lead us to a brighter state of mind... Almost THE WHITE of peace and positivity.",
      link: "#",
      duration: "4 Hours"
    },
    {
      title: "Graphology",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/3-Graphology-C.png",
      content: "The most progressive science that imparts the skill of analysing handwriting to identify and interpret a person's character. An ideal course for those who want to learn something interesting and also make headway to a flourishing career of being a Graphologist.",
      link: "https://webinar.thealcworld.in/",
      duration: "2 Hours"
    },
    {
      title: "Career Counselling Seminar",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/6-Career-Counseling-C.png",
      content: "Education is a basic and fundamental pillar of everyone's life. Correct education gives you faster success with happiness. Career Guidance Seminar gives you the detailed information about career options to be selected after 10th Grade.",
      link: "https://career.thealcworld.in/",
      duration: "3 Hours"
    },
    {
      title: "Filling The Gaps",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/7-Filling-Gap-C.png",
      content: "Who is not being understanding with whom? Parent with the child or child with the parent? Know the hidden facts of your child and channelise your child towards studies, their goals and live a happy family life by FILLING THE GAPS.",
      link: "#",
      duration: "2 Hours"
    },
    {
      title: "Time Management",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/5-Time-Management-C.png",
      content: "Complete bag of solutions for time wasters and procrastinators. A 'must attend' workshop for teenagers who are looking for correct methods of time management.",
      link: "https://timemanagement.thealcworld.in/",
      duration: "2 Hours"
    },
    {
      title: "Strategies To Score Good Marks",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/4-Good-Marks-C.png",
      content: "An intensive practical workshop for students appearing for board exams. This workshop gives pathways, strategies, and a list of practical DOs and DONTs list for securing good marks.",
      link: "#",
      duration: "2.5 Hours"
    },
    {
      title: "I Am The Future Me",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/2-The-Future-C.png",
      content: "Are you just living a life which is decided by others? Are your dreams not even known by yourself? What are the solutions to your problems in achieving your goals? This seminar will give you the master key to unlock your money flow, good health, a peaceful & successful life.",
      link: "#",
      duration: "3 Hours"
    },
    {
      title: "Focus Fostering",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/8.png",
      content: "The participant students gain the knowledge of memory tricks and concentration techniques which will faster their academic efficiency and make them a focused person.",
      link: "#",
      duration: "2 Hours"
    },
    {
      title: "Teacher Sharpening Program",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/7.png",
      content: "This program aims at sharpening skills of the most revered community of society – the teachers.",
      link: "#",
      duration: "2 Hours"
    },
    {
      title: "Business Upgrade Program",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/8.jpg",
      content: "The participants will be upgraded to a new, refreshed outlook towards their business and also charge them up for a brighter future.",
      link: "#",
      duration: "2.5 Hours"
    },
    {
      title: "Conscience Awakening Journey",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/12-e1749300973217.jpg",
      content: "A journey that will take you to the Universe of your conscience thus leading you to all the keys to your locks and obstacles of your goals and dreams.",
      link: "#",
      duration: "2.5 Hours"
    }
  ];

  useEffect(() => {
    // Initialize animations and effects
    const cards = document.querySelectorAll('.seminar-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleY = (x - centerX) / 20;
        const angleX = (centerY - y) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        card.querySelector('.glow').style.backgroundPosition = `${x}px ${y}px`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      });
    });
    
    // Add entrance animation to cards
    setTimeout(() => {
      const seminarCards = document.querySelectorAll('.seminar-card');
      seminarCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section with enhanced design */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500 rounded-full filter blur-[80px] opacity-15 animate-pulse-fast"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
                Transformational Seminars
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock your potential with our expert-led seminars designed to transform your life and career
            </p>
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <button className="relative bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group-hover:bg-gray-900 transform group-hover:scale-105">
                Explore All Seminars
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() > 0.5 ? 0 : 255}, ${Math.random() > 0.5 ? 200 : 100}, 255, ${Math.random() * 0.4})`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Seminars Section with enhanced UI */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Our Transformational Seminars
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover our range of seminars designed to unlock your potential and transform your life
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {seminars.map((seminar, index) => (
              <a 
                href={seminar.link}
                key={index} 
                className="seminar-card relative bg-gradient-to-br from-gray-800/30 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              >
                {/* Glow effect */}
                <div className="glow absolute inset-0 bg-radial-gradient from-cyan-400/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-70"></div>
                
                {/* Floating circle effect */}
                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl group-hover:opacity-50 transition-opacity duration-500 animate-float"></div>
                
                {/* Holographic border effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/30 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mt-8">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
                        <img 
                          src={seminar.image} 
                          alt={seminar.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 mt-2">
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 group-hover:text-white transition-colors text-center transform group-hover:-translate-y-1 duration-300">
                      <span className="inline-block group-hover:scale-105 transition-transform duration-500 group-hover:drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]">
                        {seminar.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 text-center group-hover:text-gray-100 transition-colors duration-500">
                      {seminar.content}
                    </p>
                    
                    <div className="flex justify-center mt-6">
                      <div className="inline-flex items-center px-4 py-2 bg-gray-800/60 rounded-full text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:bg-gray-800/80">
                        <span className="mr-3 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {seminar.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Online
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button className="inline-flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_rgba(103,232,249,0.4)]">
                        Learn More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Holographic effect lines */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px] opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-10 animate-pulse-medium"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10 animate-pulse-fast"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10 transition-all duration-700 group hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Ready to Transform Your Life?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied participants who have transformed their lives through our seminars
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 50}px, ${Math.random() * 50}px) rotate(${Math.random() * 20}deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes pulse-medium {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
        
        @keyframes pulse-fast {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at center, currentColor 0%, transparent 70%);
        }
        
        .seminar-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform: perspective(1000px) rotateX(0) rotateY(0) scale(1);
          will-change: transform;
        }
        
        .seminar-card:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.2) !important;
        }
        
        h1, h2, h3 {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Webinars;