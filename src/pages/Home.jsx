import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import YouTube from 'react-youtube';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaFacebookF, FaBrain, FaAtom } from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Social links for moving lower third
  const socialLinks = [
    {
      id: 'whatsapp',
      href: 'https://wa.me/919820587467',
      title: 'Chat on WhatsApp',
      icon: <FaWhatsapp className="text-xl md:text-2xl" />,
      bg: 'bg-gradient-to-br from-green-400 to-emerald-600'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/nirav-pakai-974170181/',
      title: 'LinkedIn',
      icon: <FaLinkedin className="text-xl md:text-2xl" />,
      bg: 'bg-gradient-to-br from-blue-500 to-indigo-700'
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/activelearningcompany/',
      title: 'Instagram',
      icon: <FaInstagram className="text-xl md:text-2xl" />,
      bg: 'bg-gradient-to-br from-pink-500 to-rose-700'
    },
    {
      id: 'youtube',
      href: 'https://www.youtube.com/@niravpakai1',
      title: 'YouTube',
      icon: <FaYoutube className="text-xl md:text-2xl" />,
      bg: 'bg-gradient-to-br from-red-500 to-rose-800'
    },
    {
      id: 'facebook',
      href: 'https://www.facebook.com/ALCNiravPakai',
      title: 'Facebook',
      icon: <FaFacebookF className="text-xl md:text-2xl" />,
      bg: 'bg-gradient-to-br from-blue-600 to-blue-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Book 3D Container */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* 3D Book Effect */}
              <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a 
                  href="https://thealcworld.in/wp-content/uploads/2025/05/book.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block perspective-1000 hover:perspective-1500 transition-all duration-700"
                >
                  <div className="relative book-3d transition-transform duration-700 hover:rotate-y-15">
                    <div className="book-cover shadow-2xl rounded-lg overflow-hidden">
                      <img 
                        src="https://thealcworld.in/wp-content/uploads/2025/05/book.png" 
                        alt="Featured Book" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="book-spine absolute top-0 left-0 w-4 h-full bg-gray-800 transform rotate-y-90 origin-left"></div>
                    <div className="book-shadow absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black opacity-20 blur-xl rounded-full"></div>
                  </div>
                </a>
              </div>
              
              {/* Call to Action */}
              <div className={`mt-8 text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a 
                  href="https://thealcworld.in/wp-content/uploads/2025/05/book.png" 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Your Copy Now
                </a>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                Transform Your Learning Journey
              </h1>
              <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                Discover our revolutionary book that combines cutting-edge pedagogy with practical insights to elevate your educational experience.
              </p>
              <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow">
                  <FaBrain className="text-purple-600 mr-2" />
                  <span>Enhanced Cognition</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow">
                  <FaAtom className="text-blue-500 mr-2" />
                  <span>Modern Pedagogy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Moving Social Lower Third */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900 to-black py-3 overflow-hidden">
        <div className="marquee-container flex">
          <div className="marquee-content flex space-x-8 animate-marquee whitespace-nowrap">
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-full p-3 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${link.bg}`}
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* Duplicate for seamless looping */}
          <div className="marquee-content flex space-x-8 animate-marquee whitespace-nowrap ml-8">
            {socialLinks.map((link) => (
              <a
                key={`dup-${link.id}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-full p-3 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${link.bg}`}
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  // Seminar data - reordered as specified
  const seminars = [
    {
      title: "The 8th Colour Of Life",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/1-8CL-C.png",
      content: "Our Emotions are symbolized by seven colours and their varied shades. Blending these colours of emotions in a prudent and thoughtful proportion can lead us to a brighter state of mind… Almost THE WHITE of peace and positivity.",
      link: "https://thealcworld.in/store/product/the-8th-colour-of-life/"
    },
    {
      title: "Graphology",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/3-Graphology-C.png",
      content: "The most progressive science that imparts the skill of analysing handwriting to identify and interpret a person's character. An ideal course for those who want to learn something interesting and also make headway to a flourishing career of being a Graphologist.",
      link: "https://webinar.thealcworld.in/"
    },
    {
      title: "Career Pathway",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/6-Career-Counseling-C.png",
      content: "Education is a basic and fundamental pillar of everyone's life. Correct education gives you faster success with happiness. Career Guidance Seminar gives you the detailed information about career options to be selected after 10th Grade.",
      link: "https://career.thealcworld.in/"
    },
    {
      title: "Filling The Gaps",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/7-Filling-Gap-C.png",
      content: "Who is not being understanding with whom? Parent with the child or child with the parent? Know the hidden facts of your child and channelise your child towards studies, their goals and live a happy family life by FILLING THE GAPS.",
      link: "https://thealcworld.in/store/product/filling-the-gaps/"
    },
    // Remaining seminars in random order
    {
      title: "Time Management",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/5-Time-Management-C.png",
      content: "Complete bag of solutions for time wasters and procrastinators. A 'must attend' workshop for teenagers who are looking for correct methods of time management.",
      link: "https://timemanagement.thealcworld.in/"
    },
    {
      title: "Strategies To Score Good Marks",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/4-Good-Marks-C.png",
      content: "An intensive practical workshop for students appearing for board exams. This workshop gives pathways, strategies, and a list of practical DOs and DONTs list for securing good marks.",
      link: "https://thealcworld.in/store/product/strategies-to-score-good-marks/"
    },
    {
      title: "I Am The Future Me",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/2-The-Future-C.png",
      content: "Are you just living a life which is decided by others? Are your dreams not even known by yourself? What are the solutions to your problems in achieving your goals? This seminar will give you the master key to unlock your money flow, good health, a peaceful & successful life.",
      link: "https://thealcworld.in/store/product/im-the-future-me/"
    },
    {
      title: "Focus Fostering",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/8.png",
      content: "The participant students gain the knowledge of memory tricks and concentration techniques which will faster their academic efficiency and make them a focused person.",
      link: "https://thealcworld.in/store/product/focus-fostering/"
    },
    {
      title: "Teacher Sharpening Program",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/7.png",
      content: "This program aims at sharpening skills of the most revered community of society – the teachers.",
      link: "https://thealcworld.in/store/product/teachers-sharpening-program/"
    },
    {
      title: "Business Upgrade Program",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/9.png",
      content: "The participants will be upgraded to a new, refreshed outlook to a new, refreshed outlook towards their business and also charge them up for a brighter future.",
      link: "https://thealcworld.in/store/product/business-upthrust/"
    },
    {
      title: "Conscience Awakening Journey",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/12-e1749300973217.jpg",
      content: "We often neglect our conscience which leads to us into undesired situations. At a point, we realize our mistake and want to trust and follow our conscience. A journey that will take you to the Universe of your conscience thus leading you to all the keys to your locks and obstacles of your goals and dreams.",
      link: "https://thealcworld.in/store/product/conscience-universe/"
    }
  ];

  // Features data
  const features = [
    {
      title: "Global Community",
      content: "Join a vibrant network of learners. professionals & change-makers.",
      icon: "🌐"
    },
    {
      title: "Graphology Expertise",
      content: "Decode subconscious patterns in handwriting & signatures.",
      icon: "✍️"
    },
    {
      title: "Leadership Psychology",
      content: "Practical strategies + soulful introspection for growth.",
      icon: "🧠"
    },
    {
      title: "The 8CL Book",
      content: "A bestseller playbook for personal development & intentional growth.",
      icon: "📚"
    },
    {
      title: "Teacher Training",
      content: "Customized programs for educators to enhance teaching excellence.",
      icon: "👩‍🏫"
    },
    {
      title: "Transformational Learning",
      content: "Immersive programs designed to unlock personal & professional potential.",
      icon: "🚀"
    },
    {
      title: "Expert Mentorship",
      content: "Nirav Pakai's global experience empowers breakthrough growth.",
      icon: "👨‍💼"
    },
    {
      title: "ISO Certified Quality",
      content: "ALC is ISO 9001:2015 certified, delivering excellence worldwide.",
      icon: "🏅"
    }
  ];

  // Testimonials data with Indian profile pictures
  const testimonials = [
    {
      name: "Akash Jadhav",
      role: "Business Owner",
      content: "The leadership training completely transformed my approach to business. Our team productivity increased by 40% in just 3 months!",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/91995856-3E48-4D39-AEA4-D2D45E0091B8.jpeg"
    },
    {
      name: "Araman Salunkhe",
      role: "College Student",
      content: "The career counseling seminar helped me discover my true passion. I'm now pursuing my dream career in psychology!",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_5352-scaled.jpg"
    },
    {
      name: "Dr. Ritu Savla",
      role: "Doctor",
      content: "The teacher training program gave me innovative techniques to engage students. My classes have never been more interactive!",
      image: "https://mothersnest.co.in/wp-content/uploads/2025/05/Home-1.png"
    },
    {
      name: "Pratik Shrivastava",
      role: "Youtuber",
      content: "The graphology course opened a new career path for me. I'm now certified and helping people understand themselves better.",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_5646.jpg"
    },
    {
      name: "Avinash",
      role: "Corporate Engineer",
      content: "Nirav's mentorship helped me break through my professional plateau. I've been promoted twice in the last year!",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_5650.jpg"
    },
    {
      name: "Nachiket",
      role: "Law Student",
      content: "The transformational leadership program helped me build a cohesive team that exceeded all our quarterly targets.",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_5671.jpg"
    },
    {
      name: "Rahul Verma",
      role: "Software Engineer",
      content: "The time management seminar completely changed how I approach my work. I've doubled my productivity while reducing stress.",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_5670.jpg"
    },
    {
      name: "Prajwal",
      role: "School Principal",
      content: "Our teachers underwent the sharpening program and the results were phenomenal. Student engagement has increased by 60%.",
      image: "https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_5669.jpg"
    }
  ];

  // Video testimonials
  const videoTestimonials = [
    { id: 'zUme8dBoPa8', title: 'Corporate Training Testimonial' },
    { id: '6D7tlKgCv-s', title: 'Student Success Story' },
    { id: 'muNy8kSHkPc', title: 'Workshop Experience' },
    { id: 'MFniP0JiHqI', title: 'Career Counseling Impact' },
    { id: 'abc123def45', title: 'Leadership Transformation' },
    { id: 'xyz789uvw01', title: 'Teacher Development' },
    { id: 'jkl234mno56', title: 'Graphology Certification' },
    { id: 'pqr789stu01', title: 'Parenting Workshop' }
  ];

  // Statistics data with icons
  const statistics = [
    { value: 150000, label: "Students Transformed", icon: "👨‍🎓", plus: true },
    { value: 200, label: "Corporate Clients", icon: "🏢", plus: true },
    { value: 270, label: "Workshops", icon: "📅", plus: true },
    { value: 99, label: "Satisfaction Rate", icon: "⭐", percent: true }
  ];

  // Who can enroll data
  const enrollCategories = [
    {
      title: "Students",
      description: "Unlock your potential with personalized guidance",
      icon: "📚",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Professionals",
      description: "Advance your career with leadership skills",
      icon: "💼",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Teachers",
      description: "Enhance your teaching methodology",
      icon: "👩‍🏫",
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "Parents",
      description: "Guide your children effectively",
      icon: "👨‍👩‍👧‍👦",
      color: "from-rose-500 to-pink-500"
    }
  ];

  // State for testimonial slider
  const [currentSet, setCurrentSet] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isBookRotating, setIsBookRotating] = useState(true);
  const testimonialRef = useRef(null);
  const bookRef = useRef(null);
  const testimonialsPerPage = 4;
  const totalSets = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSets]);

  // Initialize animations
  useEffect(() => {
    // Initialize tilt effect on cards
    const initTilt = () => {
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateY = (x - centerX) / 25;
          const rotateX = (centerY - y) / 25;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
      });
    };

    initTilt();
    
    // Initialize particle effect
    const initParticles = () => {
      const container = document.querySelector('.particle-container');
      if (!container) return;
      
      // Clear existing particles
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        container.appendChild(particle);
      }
    };

    initParticles();
    
    // Initialize counters
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const isPlus = counter.getAttribute('data-plus') === 'true';
      const isPercent = counter.getAttribute('data-percent') === 'true';
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          let displayValue = target.toLocaleString();
          if (isPlus) displayValue += '+';
          if (isPercent) displayValue += '%';
          counter.textContent = displayValue;
        }
      };
      
      // Start counter when in view
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });

    const rotateBook = () => {
      if (bookRef.current && isBookRotating) {
        const rotation = (Date.now() / 50) % 360;
        bookRef.current.style.transform = `rotateY(${rotation}deg)`;
        bookRef.current.style.boxShadow = `0 0 30px rgba(0, ${Math.sin(rotation * Math.PI / 180) * 255}, 255, 0.8)`;
        requestAnimationFrame(rotateBook);
      }
    };

    if (isBookRotating) {
      rotateBook();
    }

    return () => setIsBookRotating(false);
  }, [isBookRotating]);

  // YouTube video options - fixed sound issue
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0, // Unmuted for sound
      loop: 1,
      playlist: hoveredVideo
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      {/* Particle background */}
      <div className="particle-container fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Floating holographic elements */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow z-0"></div>
      <div className="fixed top-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse-medium z-0"></div>
      <div className="fixed bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-amber-500/10 blur-3xl animate-pulse-fast z-0"></div>
      
      <Header />
      
      {/* Updated Hero Section with Matrix Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Faded Matrix Background */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/code-pattern.png')`,
          backgroundSize: 'cover'
        }}></div>
        
        <div className="absolute inset-0 z-0">
          <div className="holographic-gradient animate-gradient opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Master Leadership with ALC
                </h1>
                
                <p className="text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 mb-8">
                  Join 150,000+ students and professionals who transformed their lives through our corporate training and student development.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <a 
                  href="/courses" 
                  className="cta-button relative overflow-hidden shimmer-button bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30 flex items-center"
                >
                  <span className="relative z-10">Enroll Now</span>
                  <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                
                <a 
                  href="/about-us" 
                  className="cta-button bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-10 rounded-full text-lg transform transition-all duration-300 hover:scale-105 flex items-center"
                >
                  <span>ABOUT US</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col items-center mt-12 lg:mt-0">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border-4 border-cyan-500/30 w-full max-w-md h-96 transition-transform duration-500 group-hover:scale-105 group-hover:border-cyan-500/60">
                  <img 
                    src="https://thealcworld.in/store/wp-content/uploads/2025/06/IMG_6792-e1749300666514.jpg" 
                    alt="ALC Transformational Seminar" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-cyan-300">Nirav Pakai</h3>
                  </div>
                </div>
              </div>
              
              {/* New Text Below Founder Image */}
              <div className="text-center mt-8">
                <p className="text-2xl font-bold text-white">
                  Leading towards <span className="line-through">Perfectionism</span>
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 mt-2">
                  Passion
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce w-8 h-8 flex items-center justify-center rounded-full bg-cyan-500/20">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Seminars Section */}
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map((seminar, index) => (
              <a 
                href={seminar.link}
                key={index} 
                className="seminar-card tilt-card bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl group"
              >
                <div className="flex justify-center mt-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg">
                    <img 
                      src={seminar.image} 
                      alt={seminar.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3 group-hover:text-white transition-colors text-center">{seminar.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">{seminar.content}</p>
                  <div className="flex justify-center mt-6">
                    <div className="text-xs text-gray-400">
                      <span className="mr-2">⏱️ 2 Hours</span>
                      <span>📍 Online</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Why Choose Active Learning Company
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We provide transformative experiences that empower individuals and organizations
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card tilt-card bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg glass-effect"
              >
                <div className="text-4xl mb-4 text-amber-400 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold text-amber-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Who Can Enroll Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Who Can Benefit From Our Programs
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our transformative programs are designed for diverse audiences
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollCategories.map((category, index) => (
              <div 
                key={index} 
                className="enroll-card tilt-card bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 shadow-xl"
              >
                <div className="text-6xl mb-4 text-center">{category.icon}</div>
                <h3 className={`text-xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </h3>
                <p className="text-gray-300 text-center">{category.description}</p>
                <div className="mt-6 text-center">
                  <a 
                    href="/courses" 
                    className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-all duration-300 hover:opacity-90"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Text Testimonials Section */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Hear from our students and professionals who transformed their lives
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSet * 100}%)` }}
            >
              {Array.from({ length: totalSets }).map((_, setIndex) => (
                <div key={setIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials
                      .slice(setIndex * testimonialsPerPage, (setIndex + 1) * testimonialsPerPage)
                      .map((testimonial, index) => (
                        <div 
                          key={index} 
                          className="testimonial-card bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30 glass-effect transform transition-all duration-300 hover:-translate-y-2"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/50">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="text-cyan-300 mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-4 h-4 inline fill-current text-amber-400" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                  </svg>
                                ))}
                              </div>
                              <p className="text-gray-300 text-sm mb-3">"{testimonial.content}"</p>
                              <div>
                                <h3 className="font-bold text-cyan-300">{testimonial.name}</h3>
                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalSets }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSet(index)}
                  className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                    index === currentSet ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Video Testimonials Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Video Testimonials
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              See the impact of our programs through the eyes of our participants
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.slice(0, 4).map((video, index) => (
              <div 
                key={index}
                className="video-testimonial relative rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="aspect-video w-full flex items-center justify-center">
                  {hoveredVideo === video.id ? (
                    <YouTube
                      videoId={video.id}
                      opts={videoOptions}
                      className="w-full h-full"
                      iframeClassName="w-full h-full object-contain"
                    />
                  ) : (
                    <>
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                        <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Mission & Vision Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Our Core Philosophy
              </span>
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="mission-card bg-gradient-to-br from-cyan-900/30 to-cyan-700/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 transform transition-all duration-500 hover:-translate-y-2 shadow-lg relative overflow-hidden glass-effect hover:shadow-cyan-500/20">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  ALC Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We empower ambitious individuals to unlock their full potential through transformative learning in academics, business, and leadership—paired with spiritual growth. Our tailored programs, immersive workshops, and personalized mentorship cultivate confidence, high-performance mindsets, and actionable success strategies. For those who refuse to settle, we provide the tools to push boundaries and achieve extraordinary results.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="vision-card bg-gradient-to-br from-amber-900/30 to-amber-700/10 backdrop-blur-xl rounded-2xl p-8 border border-amber-500/30 transform transition-all duration-500 hover:-translate-y-2 shadow-lg relative overflow-hidden glass-effect hover:shadow-amber-500/20">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  ALC Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A world where driven individuals don't just pursue success—they redefine it. Through cutting-edge strategies, spiritual alignment, and bespoke mentorship, ALC equips you to rise faster, dream bigger, and leave a lasting impact. Join a community of boundary-breakers and ignite your journey to unparalleled growth.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Founder Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Meet Our Founder
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The visionary behind Active Learning Company
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="founder-image-container lg:w-2/5">
              <div className="rounded-2xl overflow-hidden border-4 border-amber-500/30 shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 relative">
                <img 
                  src="https://thealcworld.in/store/wp-content/uploads/2025/06/23-CL.jpg" 
                  alt="Nirav Pakai" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-amber-300">Nirav Pakai</h3>
                  <p className="text-gray-300">Founder & Chief Mentor</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h3 className="text-3xl font-bold text-amber-300 mb-4">Transformational Mentor, Graphology Expert & Lifelong Educator</h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Nirav Pakai is a transformational mentor, graphology expert, and lifelong educator on a mission to redefine learning as an active, empowering journey. As the Founder & Chief Mentor of The ALC (Active Learning Company), he designs immersive experiences that help individuals and organisations unlock their highest potential through the science of handwriting analysis.
                </p>
                <p>
                  With over 15 years of experience in graphology and personal development, Nirav has pioneered unique methodologies that decode the subconscious patterns in handwriting to reveal personality traits, strengths, and growth opportunities. His approach bridges science and self-awareness, blending pragmatic strategies with soulful introspection.
                </p>
                <p>
                  A sought-after speaker and workshop conductor, Nirav has transformed the lives of over 150,000 students and professionals through his innovative programs. His insights have reshaped mindsets across industries, proving that true success begins with intentional learning and self-discovery.
                </p>
                <p>
                  Beyond the stage, Nirav wears multiple hats with passion: A dedicated educator since 2004, a certified Graphologist since 2010, and a relentless explorer of human potential. His book, <span className="text-amber-300 font-medium">8CL - The Eighth Colour Of Life</span>, distills decades of transformative lessons into a powerful playbook designed to spark 1 Billion Smiles.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="/about-us" 
                    className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <span>Learn More About Nirav</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="/courses" 
                    className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <span>Register Now</span>
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
      
      {/* Trust Badges */}
      <section className="py-12 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-cyan-300">Trusted & Certified</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img 
              src="https://thealcworld.in/store/wp-content/uploads/2025/06/iso9001.png" 
              alt="ISO 9001 Certified" 
              className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://thealcworld.in/store/wp-content/uploads/2025/06/ISO-Certified-Logo.jpg" 
              alt="ISO Certified" 
              className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
            LAST CHANCE TO ENROLL - BATCH CLOSING SOON!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Life Before It's Too Late
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of students and professionals who have unlocked their potential with Active Learning Company. Limited seats available for our upcoming batch!
          </p>
          
          <a 
            href="/courses" 
            className="cta-button shimmer-button bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30 inline-flex items-center"
          >
            <span>Secure Your Spot Now</span>
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          
          <p className="mt-6 text-gray-400 text-sm">
            Only 12 spots remaining - Enrollment closes in 3 days
          </p>
        </div>
      </section>
      
      <Footer />
      
      {/* Custom styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 20px rgba(0, 247, 255, 0.7); }
          50% { box-shadow: 0 0 40px rgba(0, 247, 255, 0.5), 0 0 80px rgba(0, 247, 255, 0.3); }
          100% { box-shadow: 0 0 20px rgba(0, 247, 255, 0.7); }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(100px, -50px) rotate(90deg); opacity: 0.5; }
          50% { transform: translate(200px, 0px) rotate(180deg); opacity: 0.3; }
          75% { transform: translate(100px, 50px) rotate(270deg); opacity: 0.5; }
          100% { transform: translate(0px, 0px) rotate(360deg); opacity: 0.3; }
        }
        
        @keyframes text-pulse {
          0% { text-shadow: 0 0 10px rgba(0, 247, 255, 0.7); }
          50% { text-shadow: 0 0 20px rgba(0, 247, 255, 0.9), 0 0 30px rgba(0, 247, 255, 0.5); }
          100% { text-shadow: 0 0 10px rgba(0, 247, 255, 0.7); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.2); }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.3); }
        }
        
        .animate-text-pulse {
          animation: text-pulse 3s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 3s infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s infinite;
        }
        
        .holographic-gradient {
          background: linear-gradient(125deg, #0c1445, #1a237e, #4a148c, #0d47a1, #0c1445);
          background-size: 400% 400%;
          animation: gradient 20s ease infinite;
          position: absolute;
          top: -10%;
          left: -10%;
          right: -10%;
          bottom: -10%;
          opacity: 0.7;
        }
        
        .holographic-card {
          background: rgba(10, 15, 35, 0.4);
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.8),
                      0 0 60px rgba(0, 247, 255, 0.6),
                      0 0 100px rgba(0, 247, 255, 0.4);
          animation: pulse-glow 4s infinite alternate;
          border: 1px solid rgba(0, 247, 255, 0.4);
          backdrop-filter: blur(12px);
        }
        
        .shimmer-button {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20px;
          height: 200%;
          background: rgba(255, 255, 255, 0.4);
          transform: rotate(25deg);
          transition: all 0.8s;
        }
        
        .shimmer-button:hover::after {
          left: 140%;
        }
        
        .circle-image-container {
          transition: all 0.5s ease;
        }
        
        .circle-image-container:hover {
          box-shadow: 0 0 30px rgba(0, 247, 255, 0.8);
          transform: scale(1.05);
        }
        
        .feature-card:hover {
          box-shadow: 0 15px 40px rgba(251, 191, 36, 0.3);
        }
        
        .glass-effect {
          background: rgba(30, 30, 50, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float 20s infinite linear;
          opacity: 0.5;
        }
        
        .tilt-card {
          transition: transform 0.2s ease-out;
          transform-style: preserve-3d;
        }
        
        .testimonial-slider-container {
          min-height: 300px;
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
        
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        
        .book-3d {
          transition: transform 1s ease;
        }
        
        .video-testimonial iframe {
          object-fit: contain !important;
        }
        
        /* New styles for hero section */
        .holographic-gradient {
          background: linear-gradient(45deg, 
            rgba(0, 0, 0, 0.8) 0%, 
            rgba(15, 23, 42, 0.8) 20%, 
            rgba(6, 78, 59, 0.6) 40%, 
            rgba(8, 47, 73, 0.7) 60%, 
            rgba(88, 28, 135, 0.6) 80%, 
            rgba(0, 0, 0, 0.8) 100%
          );
          background-size: 300% 300%;
        }
        
        .animate-gradient {
          animation: gradient-shift 10s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .shimmer-button {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: rotate(30deg) translateX(-100%); }
          100% { transform: rotate(30deg) translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;