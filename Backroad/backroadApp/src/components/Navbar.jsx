import React from 'react'
import Logo from '../images/logo.svg';
import {pageLinks, socialLinks} from '../data.jsx';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <ul className="nav-links" id="nav-links">
        {pageLinks.map((links)=>{
                return(
                    <li key={links.id}>
                    <a href={links.href} className='nav-link'>{links.text}</a>
                </li>
                );
            })}
        </ul>

        <ul className="nav-icons">
            {socialLinks.map((social) =>
            {
                return(
                    <li key={social.id}>
                        <a href={social.href} target="_blank" className="nav-icon"><i className={social.class}></i></a>
                    </li>
                );
            })}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar