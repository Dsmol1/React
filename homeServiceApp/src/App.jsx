import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/_global/topbar/Topbar';
import Footer from './components/_global/footer/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Favorites from './pages/services/favorites/Favorites';
import AboutUs from './pages/aboutUs/AboutUs';
import Auth from './pages/auth/Auth';
import Register from './pages/auth/register/Register';

import SearchPage from './pages/searchPage/searchPage';

export default function App() {
  return (
    <Router>
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:categoryName" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

