import React, { useState } from 'react';
import './Signin.css';
import SignUp from './Signup';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  if (isSignUp) {
    return <SignUp />;
  }

  return (
    <div className="background">
      <div className="form-wrapper1">
        <h2 className="form-title">Sign In</h2>
        <form className="form">
          <input type="email" placeholder="Email" required className="input" />
          <input type="password" placeholder="Password" required className="input" />
          <button type="submit" className="button">Sign In</button>
        </form>
        <div className="link">
          <p>
            Don't have an account? <a href="#!" onClick={switchToSignUp}>Sign Up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
