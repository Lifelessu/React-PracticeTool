import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Service from './components/Services.jsx';
import Tours from './components/Tours.jsx';
import Footer from './components/Footer.jsx';
function App() {
 //const [count, setCount] = useState(0)

  return<>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Tours/>
      <Footer/>
    </>
  
}

export default App
