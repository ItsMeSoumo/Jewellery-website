import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero, Features } from './components/Hero'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Category } from './components/Category'
import { UncutDiamond } from './components/UncutDiamond'
import { AboutUs } from './components/AboutUs'
import { SpecialCollection } from './components/SpecialCollection'
import { Types } from './components/Types'

// Pages
const Home = () => (
  <>
    <Hero />
    <Features />
    <Types />
    <Experience />
    <Testimonials />
    <Contact />
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#080808]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/uncut-diamond" element={<UncutDiamond />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/special-collection" element={<SpecialCollection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
