import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from "../assets/logo.png";
import Headroom from 'react-headroom';

const Navbar = () => {
    const link = <>
    <NavLink className= 'nav' to = '/'>Home</NavLink> 
    <NavLink className= 'nav' to = '/about'>About Me</NavLink> 
    <NavLink className= 'nav' to = '/portfoio'>Portfolio</NavLink> 
    <NavLink className= 'nav' to = '/resume'>Resume</NavLink> 
    <NavLink className= 'nav' to = '/contact'>Contact</NavLink> 
    </>
    return (
        <Headroom>
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {link}
            </ul>
          </div>
          <Link to ='/'>

           <img  className='w-52' src={logo} alt="" /> 
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
 </Headroom>
    );
};

export default Navbar;