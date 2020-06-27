import React from 'react';
import { Link } from 'react-router-dom';
import './frontpage.css';


class FrontPage extends React.Component {
 
  componentDidMount () {
  let signUpButton = document.getElementById("signUp");
  let signInButton = document.getElementById("signIn");
  let container = document.getElementById("container");


  if (signUpButton) {
      signUpButton.addEventListener("click", () =>
        container.classList.add("right-panel-active")
      )
    };
    if (signInButton) {
      signInButton.addEventListener("click", () =>
        container.classList.remove("right-panel-active")
      )
    };
}
  render () { 
  
    return (
      <div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <Link to="#" className="social">
                  G
                </Link>
                <Link to="#" className="social">
                  F
                </Link>
                <Link to="#" className="social">
                  L
                </Link>
              </div>
              <span>or register with your email</span>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign In</h1>
              <div className="social-container">
                <Link to="#" className="social">
                  G
                </Link>
                <Link to="#" className="social">
                  F
                </Link>
                <Link to="#" className="social">
                  L
                </Link>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Link to="#">
                forget your password?
              </Link>
              <button className="pageBtn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Hello, welcome back</h1>
                <p>
                  To keep connected with us, please log in with your personal
                  info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, friend</h1>
                <p>
                  Enter your personal details and start your journey with us{" "}
                </p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default FrontPage;