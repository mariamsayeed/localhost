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
}

export default App;
