import React from 'react';

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
          <a href="#">Forget Password</a>
        </div>
        <button className="btn">Login In</button>
        <div className="create-account">
          <p>Create A New Account? <a href="#" className="register-link">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;