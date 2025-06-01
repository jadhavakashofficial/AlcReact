import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Webinars from './pages/Webinars';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Webinars />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testomonials" element={<Testimonials />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
}

export default App;
