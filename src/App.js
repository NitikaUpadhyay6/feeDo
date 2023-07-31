import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
