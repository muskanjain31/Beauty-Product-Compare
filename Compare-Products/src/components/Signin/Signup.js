import React, { useState } from 'react';
import './Signup.css';
import SignIn from './Signin';

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  if (isSignIn) {
    return <SignIn />;
  }

  return (
    <div className="background">
      <div className="form-wrapper">
        <h2 className="form-title">Sign Up</h2>
        <form className="form">
          <input type="text" placeholder="Username" required className="input" />
          <input type="email" placeholder="Email" required className="input" />
          <input type="password" placeholder="Password" required className="input" />
          <button type="submit" className="button">Sign Up</button>
        </form>
        <div className="link">
          <p>
            Already have an account? <a href="#!" onClick={switchToSignIn}>Sign In here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
