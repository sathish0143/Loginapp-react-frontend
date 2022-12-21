import React, { useState } from "react";
import "./login.css";
import { useEffect } from "react";

const Login = ({ onLoginSuccessful }) => {
  //! Store values here

  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userpass, setUserpass] = useState("");
  const [username, setUsername] = useState("");

  //!Signup user.. post to server
  const handleSubmit = async (e) => {
    console.log("signup successfull");
    e.preventDefault();
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const body = await response.json();
    console.log(body);

    console.log(body.email);
    document.getElementById(
      "resmsg"
    ).innerHTML = `${body.email} : Account Created successfully`;
  };

  //!login callback route
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    const loginData = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: userpass,
      }),
    });
    const body = await loginData.json();

    if (body.msg === "true") {
      onLoginSuccessful();
    }
    console.log(body.msg);
    document.getElementById("resmsg").innerHTML = `${body.msg}`;
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  return (
    <div>
      <h2>Coded By Sathish😊❤</h2>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="https://www.google.com/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.google.com/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="https://www.google.com/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="https://www.google.com/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.google.com/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="https://www.google.com/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={userpass}
              onChange={(e) => {
                setUserpass(e.target.value);
              }}
              required
            />
            <a href="https://www.google.com/">Forgot your password?</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <p id="retval"></p>
      <p id="resmsg"></p>
    </div>
  );
};

export default Login;
