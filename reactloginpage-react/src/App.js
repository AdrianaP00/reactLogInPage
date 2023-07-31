import React from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="background"></div>
      <div className="container">
        <LoginForm />
        <SignUpForm/>
      </div>
    </div>
  );
};

export default App;
