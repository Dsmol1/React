import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

