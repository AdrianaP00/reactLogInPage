import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/Home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/Portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
            <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            <NavLink to="/Help" className={({ isActive }) => isActive ? "active" : ""}>Help</NavLink>
      </nav>
      <form action="" className="search-bar">
        <input type="text" placeholder="Search..." />
        <button><i className='bx bx-search'></i></button>
      </form>
    </header>
  );
};

export default Navbar;