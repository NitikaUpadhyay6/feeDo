import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
          <div className="logo">
            <img src={require('../img/logo.png')} alt="logo" className='logo' />
            </div>  
            <ul className='header-menu nav-links'>
            {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <div className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>    
           
            </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar