// src/pages/Testimonials.jsx

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Text testimonials data
  const textTestimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Manager, Tech Mahindra",
      quote:
        "ALC's leadership program transformed my career. The practical insights and personalized coaching helped me secure a promotion within 6 months!",
      avatar: "RK",
      type: "corporate",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "HR Director, Infosys",
      quote:
        "We've implemented ALC's corporate training across 3 divisions. Employee engagement has increased by 40% and leadership effectiveness scores are at an all-time high.",
      avatar: "PS",
      type: "corporate",
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Engineering Student, IIT Delhi",
      quote:
        "The student development program gave me confidence I never knew I had. I went from being hesitant to speak in class to winning national debating competitions!",
      avatar: "VS",
      type: "student",
    },
    {
      id: 4,
      name: "Ananya Patel",
      role: "Marketing Executive, Flipkart",
      quote:
        "Nirav's mentorship helped me develop a growth mindset. I've tripled my team's productivity and received two promotions in the last year.",
      avatar: "AP",
      type: "corporate",
    },
    {
      id: 5,
      name: "Sanjay Mehta",
      role: "Entrepreneur & Startup Founder",
      quote:
        "ALC didn't just teach leadership - they helped me build a leadership culture in my startup. Our retention rates have improved dramatically.",
      avatar: "SM",
      type: "corporate",
    },
    {
      id: 6,
      name: "Neha Gupta",
      role: "Product Manager, Amazon",
      quote:
        "The communication mastery program completely changed how I present ideas. I now lead cross-functional teams with confidence and clarity.",
      avatar: "NG",
      type: "corporate",
    },
    {
      id: 7,
      name: "Amit Sharma",
      role: "MBA Student, IIM Ahmedabad",
      quote:
        "The leadership workshops helped me secure a dream job at a Fortune 500 company. The interview preparation was invaluable!",
      avatar: "AS",
      type: "student",
    },
    {
      id: 8,
      name: "Deepika Rao",
      role: "Software Engineer, Google",
      quote:
        "ALC's emotional intelligence training transformed my approach to teamwork. I'm now leading projects with greater empathy and effectiveness.",
      avatar: "DR",
      type: "corporate",
    },
  ];

  // Video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      title: "Corporate Leadership Transformation",
      description:
        "How ALC helped TechCorp revolutionize their management approach",
      url: "https://youtu.be/zUme8dBoPa8",
      type: "corporate",
    },
    {
      id: 2,
      title: "Student Success Story",
      description: "From classroom to boardroom: Vikram's journey with ALC",
      url: "https://youtu.be/6D7tlKgCv-s",
      type: "student",
    },
    {
      id: 3,
      title: "Career Advancement Journey",
      description: "Ananya's rapid promotion after ALC's executive program",
      url: "https://youtu.be/muNy8kSHkPc",
      type: "corporate",
    },
    {
      id: 4,
      title: "Team Building Experience",
      description: "Building cohesive teams at FinServe Inc. with ALC methods",
      url: "https://youtu.be/MFniP0JiHqI",
      type: "corporate",
    },
    {
      id: 5,
      title: "Leadership in Tech",
      description: "Transforming tech leaders at InnovateX with ALC frameworks",
      url: "https://youtu.be/dQw4w9WgXcQ",
      type: "corporate",
    },
    {
      id: 6,
      title: "Campus to Corporate",
      description: "How ALC prepares students for leadership roles",
      url: "https://youtu.be/9bZkp7q19f0",
      type: "student",
    },
    {
      id: 7,
      title: "Entrepreneurial Growth",
      description: "Sanjay's startup success with ALC's mentorship",
      url: "https://youtu.be/VYOjWnS4cMY",
      type: "corporate",
    },
    {
      id: 8,
      title: "Global Leadership",
      description: "Developing leaders for international markets",
      url: "https://youtu.be/CduA0TULnow",
      type: "corporate",
    },
  ];

  // Filter testimonials based on active tab
  const filteredTextTestimonials =
    activeTab === "all"
      ? textTestimonials
      : textTestimonials.filter(
          (testimonial) => testimonial.type === activeTab
        );

  const filteredVideoTestimonials =
    activeTab === "all"
      ? videoTestimonials
      : videoTestimonials.filter((testimonial) => testimonial.type === activeTab);

  // Helper to extract YouTube video ID from URL
  const extractYouTubeID = (url) => {
    if (!url) return "";
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }
    if (url.includes("v=")) {
      return url.split("v=")[1].split("&")[0];
    }
    return "";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
          <div className="absolute inset-0 z-0">
            <div className="holographic-gradient animate-gradient opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e6ed103b52125522d7c8d94_5e6c01bb521250d0c21190d1_Group%208.png')] bg-cover bg-center mix-blend-soft-light opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="inline-block bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-cyan-300 font-medium">
                Transformational Journeys
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Hear from our students and corporate clients about their transformational
              journeys with ALC
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">150K+</span>
              </div>
              <div className="bg-gradient-to-r from-amber-600 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">95%</span>
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">4.9★</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Testimonial Tabs */}
        <section className="py-12 px-4 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                All Testimonials
              </button>
              <button
                onClick={() => setActiveTab("corporate")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "corporate"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Corporate Success
              </button>
              <button
                onClick={() => setActiveTab("student")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "student"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Student Journeys
              </button>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-gray-700 to-cyan-500"></div>
                <h2 className="text-cyan-400 font-semibold">VIDEO TESTIMONIALS</h2>
                <div className="w-12 h-px bg-gradient-to-l from-gray-700 to-cyan-500"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Real Stories, Real Impact
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Watch how ALC programs have transformed careers and organizations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredVideoTestimonials.map((video) => {
                const videoId = extractYouTubeID(video.url);
                return (
                  <div
                    key={video.id}
                    className="group relative rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20"
                  >
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            video.type === "corporate"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {video.type === "corporate" ? "Corporate" : "Student"}
                        </span>
                        <span className="text-xs text-gray-400">3:45 min</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-blue-100">
                        {video.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Text Testimonials */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-gray-700 to-amber-500"></div>
                <h2 className="text-amber-400 font-semibold">TEXT TESTIMONIALS</h2>
                <div className="w-12 h-px bg-gradient-to-l from-gray-700 to-amber-500"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Voices of Transformation
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Discover how our participants have unlocked their leadership potential
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTextTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 relative group"
                >
                  <div className="absolute top-4 right-4 text-cyan-300 opacity-30 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-cyan-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-blue-100 mb-6">"{testimonial.quote}"</p>
                  <div className="mt-4 flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  150,000+
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Participants</h3>
                <p className="text-blue-100">Students and professionals transformed</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
                  97%
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Success Rate</h3>
                <p className="text-blue-100">Of participants achieve their goals</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4">
                  4.9/5
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Satisfaction</h3>
                <p className="text-blue-100">Average rating from participants</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="holographic-gradient animate-gradient opacity-30"></div>
            <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e6ed103b52125522d7c8d94_5e6c01bb521250d0c21190d1_Group%208.png')] bg-cover bg-center mix-blend-soft-light opacity-10"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full px-8 py-3 mb-6">
              <span className="text-white font-medium">Limited Seats Available</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Leadership Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join our community of high-achieving professionals and students who have unlocked their true potential
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://thealcworld.in/courses/"
                className="inline-block cta-button relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                <span className="relative z-10">Enroll in Our Programs</span>
              </a>

              <a
                href="https://thealcworld.in/about-us/"
                className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-10 rounded-full text-lg transform transition-all duration-300 hover:scale-105"
              >
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
