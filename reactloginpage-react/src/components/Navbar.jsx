import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Help</a>
      </nav>
      <form action="" className="search-bar">
        <input type="text" placeholder="Search..." />
        <button><i className='bx bx-search'></i></button>
      </form>
    </header>
  );
};

export default Navbar;