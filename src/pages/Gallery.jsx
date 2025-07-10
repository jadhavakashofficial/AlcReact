import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_7866.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_3781.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_3551-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_2534-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_1302-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_1133-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_1090-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_0926-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_0717-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_0232-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_0220-scaled.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/15.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/5.jpg",
    "https://thealcworld.in/store/wp-content/uploads/2025/06/16.jpg"
  ];

  // Particle effect initialization
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.className = 'fixed top-0 left-0 w-full h-full pointer-events-none -z-10';
    document.body.appendChild(canvas);
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
    
    const particles = [];
    const particleCount = 150;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: `rgba(56, 189, 248, ${Math.random() * 0.3})`
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen overflow-x-hidden">
      {/* Holographic grid background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTAgMGwyMCAyME00MCA0MGwtMjAtMjAiIHN0cm9rZT0iIzMzNjZGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <Header />
      
      {/* Neural network connections */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <svg width="100%" height="100%">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient)"
              strokeWidth={0.3}
              strokeOpacity={0.1}
              strokeDasharray="5,5"
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#00CCFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Gallery Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-7xl mx-auto">
          {/* Holographic Section Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
            
            <div className="inline-flex items-center justify-center mb-6 p-2 bg-black/30 backdrop-blur-md rounded-full border border-cyan-500/30">
              <div className="h-0.5 bg-gradient-to-r from-gray-700 to-cyan-500 w-12"></div>
              <span className="mx-4 text-cyan-400 font-semibold text-lg tracking-widest">ALC GALLERY</span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-gray-700 w-12"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Active</span> Learning Company
            </h2>
            
            <p className="text-blue-100 max-w-2xl mx-auto text-lg bg-black/20 backdrop-blur-sm py-3 px-6 rounded-xl border border-cyan-500/20">
            THE ALC GALLERY COLLECTION
            </p>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 blur-sm opacity-40"></div>
          </div>

          {/* Quantum Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {images.map((src, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-700 hover:z-10"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Holographic Frame */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/5 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,199,255,0.1)] group-hover:shadow-[0_0_40px_rgba(0,199,255,0.3)] transition-all duration-500 z-0"></div>
                
                {/* Quantum Particle Field */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full bg-cyan-400 animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                        opacity: Math.random() * 0.5,
                        filter: 'blur(1px)',
                        animationDuration: `${Math.random() * 4 + 2}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Image Container */}
                <div className="relative h-full min-h-[300px] transform transition-transform duration-700 group-hover:scale-[1.03]">
                  <img 
                    src={src} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                  />
                  
                  {/* Holographic Interface */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-5">
                    <div className="text-right">
                      <span className="inline-block bg-cyan-900/70 text-cyan-300 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        Nirav ALC
                      </span>
                    </div>
                    
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="font-mono text-cyan-300 text-sm mb-1">#{index.toString().padStart(2, '0')}</div>
                      <div className="text-white font-medium text-xl mb-3">ALC IMAGE v{index + 1}.0</div>
                      
                      <div className="flex items-center">
                        <div className="flex space-x-1 mr-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        <div className="ml-auto">
                          <button className="bg-cyan-900/50 hover:bg-cyan-800 text-cyan-300 rounded-full p-2 transition-all duration-300 border border-cyan-700/30 backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Energy Pulse */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,231,255,0.4)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Quantum Entanglement Effect */}
          <div className="text-center mt-20">
            <div className="inline-flex relative">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-xl text-lg tracking-wider transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,199,255,0.5)] z-10 border border-cyan-400/30">
                Active Learning Company
              </button>
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-2xl blur-xl animate-pulse-slow z-0"></div>
            </div>
            
            <div className="mt-10 text-cyan-300/50 text-sm font-mono">
              <div className="inline-flex items-center">
                <div className="w-3 h-3 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
                SYSTEM STATUS: ONLINE
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Tech Orbs */}
      <div className="fixed top-1/4 left-10 w-6 h-6 rounded-full bg-cyan-500/20 blur-xl animate-float"></div>
      <div className="fixed bottom-1/3 right-20 w-8 h-8 rounded-full bg-blue-500/20 blur-xl animate-float animation-delay-2000"></div>
      <div className="fixed top-1/3 right-1/4 w-5 h-5 rounded-full bg-cyan-500/30 blur-lg animate-float animation-delay-3000"></div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default Gallery;