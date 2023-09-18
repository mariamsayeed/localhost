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
}

export default App
