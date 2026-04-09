
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
