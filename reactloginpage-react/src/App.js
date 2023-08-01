import React from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';
import Routes from './components/Routes/Routes';

const App = () => {
  return (
    <div>
<Router>
<Navbar />
      <div className="background"></div>
      <div className="container">
        <div class="item">
          <h2 class="logo">Audrey</h2>
          <div class="text-item">
            <h2>Welcome!</h2> 
            <span>
              To Our Page
            </span>
            <p>Di quale servizio vuoi usufruire?</p>
            <div class="social-icon">
            <NavLink to="/facebook" className={({ isActive }) => isActive ? "active" : ""}>facebook <i class="bx bxl-facebook"></i></NavLink>
            <NavLink to="/twitter" className={({ isActive }) => isActive ? "active" : ""}>twitter <i class="bx bxl-twitter"></i></NavLink>
            <NavLink to="/youtube" className={({ isActive }) => isActive ? "active" : ""}>youtube<i class="bx bxl-youtube"></i></NavLink>
            <NavLink to="/instagram" className={({ isActive }) => isActive ? "active" : ""}>instagram <i class="bx bxl-instagram"></i></NavLink>
            <NavLink to="/linkedin" className={({ isActive }) => isActive ? "active" : ""}>linkedin<i class="bx bxl-linkedin"></i></NavLink>
            </div>
          </div>
        </div>
        <div class="login-section">
<Routes/>
        </div>
      </div>
</Router>
    </div>
  );
};

export default App;
