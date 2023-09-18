<<<<<<< HEAD
import React from 'react'; 
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Guide from './components/Guide';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <ScrollToTop />
    
      
          <Navbar/>
          
      
    <Hero />
    <Services />
    <Recommend />
    <Guide />
    <Testimonials />
    <Footer />
  </>
  );
=======
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Recommend from './components/Recommend'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Discover from './components/Discover/Discover'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Discover />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  )
>>>>>>> 7989e2594f4e1c64690de95fb0b650b7111e0c5d
}

export default App
