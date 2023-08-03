import React from 'react';
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="form-box register">
      <form action="">
        <h2>Sign Up</h2>
        <div className="input-box">
          <span className="icon"><i className='bx bxs-user'></i></span>
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="input-box">
          <span className="icon"><i className='bx bxs-envelope'></i></span>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon"><i className='bx bxs-lock-alt'></i></span>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="remember-password">
          <label htmlFor=""><input type="checkbox" />I agree with this statement</label>
        </div>
        <button className="btn">Sign Up</button>
        <div className="create-account">
          <p><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Already Have An Account? Sing Up</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;