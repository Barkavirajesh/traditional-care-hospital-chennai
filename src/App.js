import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Consultation from "./pages/Consultation";
import Payment from "./pages/Payment";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Booking & Appointment Pages */}
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/consultation/:appointmentId" element={<Consultation />} />
        <Route path="/payment/:appointmentId" element={<Payment />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
