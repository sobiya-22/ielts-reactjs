import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer/>
    </>
  )
}

export default App
