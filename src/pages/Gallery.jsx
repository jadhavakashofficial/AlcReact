import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    "https://thealcworld.in/wp-content/uploads/2025/05/1-1.jpeg",
    "https://thealcworld.in/wp-content/uploads/2025/05/3-2.jpeg",
    "https://thealcworld.in/wp-content/uploads/2025/05/4-1.jpeg",
    "https://thealcworld.in/wp-content/uploads/2025/05/5-1.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/16-1.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/6-2.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/13-1.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/14-1.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/15-1.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/17-1.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/8CL-Book.jpg",
    "https://thealcworld.in/wp-content/uploads/2025/05/1.jpeg"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <Header />
      
      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-0.5 bg-gradient-to-r from-gray-700 to-cyan-500 w-20"></div>
              <span className="mx-4 text-cyan-400 font-semibold text-lg tracking-widest">GALLERY</span>
              <div className="h-0.5 bg-gradient-to-r from-cyan-500 to-gray-700 w-20"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Futuristic Learning Spaces
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Immerse yourself in our next-generation educational environment designed to inspire innovation
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl transition-all duration-500"
              >
                {/* Gradient Border Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Image Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl h-full overflow-hidden transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                  <img 
                    src={src} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white font-medium text-lg">Innovation Hub #{index + 1}</div>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;