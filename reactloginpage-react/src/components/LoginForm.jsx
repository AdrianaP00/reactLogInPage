import React from 'react';
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="form-box login">
      <form action="">
        <h2>Sign In</h2>
        <div className="input-box">
          <span className="icon"><i className='bx bxs-envelope'></i></span>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="remember-password">
          <label htmlFor=""><input type="checkbox" />Remember Me</label>
          <NavLink to="/forget-password" className={({ isActive }) => isActive ? "active" : ""}>Forget Password</NavLink>
        </div>
        <button className="btn">Login In</button>
        <div className="create-account">
          <p><NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>Create A New Account?</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;