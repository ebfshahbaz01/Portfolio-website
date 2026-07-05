import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import ContactUs from './Components/ContactUs'
function App() {
 
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <ContactUs/>
        </>} />
        
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App