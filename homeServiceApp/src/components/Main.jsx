import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './Services';
import About from './About';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                {/* Add more routes here as needed */}
            </Routes>
        </main>
    );
}
