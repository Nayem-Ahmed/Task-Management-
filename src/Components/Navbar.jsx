import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from '../Provider/Authprovider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <Headroom>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>  <NavLink to='/'>Home</NavLink></li>
              <li>  <NavLink to='/about'>About</NavLink></li>
              <li>  <NavLink to='/services'>Services</NavLink></li>

            </ul>
          </div>
          <a href='/' className=" text-xl font-semibold">Task Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            {
              user?.email ?
                <li><a onClick={logOut}  >Logout</a></li>
                :
                <li><NavLink to='/login'>Login</NavLink></li>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ? <>
              <span className='font-semibold'>{user.displayName}</span> 
            </>
              :
              <>
                <a className="text-3xl"><FaRegUserCircle></FaRegUserCircle></a>
              </>


          }
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;