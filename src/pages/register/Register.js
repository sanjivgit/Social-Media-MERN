import axios from "../../axios";
import React, { useRef } from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value === passwordAgain.current.value) {
      const userDetails = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post("/auth/register", userDetails);
        res.data && window.location.replace("/login");
      } catch (err) {
        console.log(err);
      }
    } else {
      passwordAgain.current.setCustomValidity("Password doesn't match!!");
    }
  };

  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginLeft">
          <h3 className="loginLeftLogo">SanjivSocial</h3>
          <span className="loginLeftDesc">
            Connect with friends and the world around you on SanjivSocial
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="loginRight">
            <input
              placeholder="Username"
              className="loginRightInput"
              type="text"
              required
              ref={username}
            />
            <input
              placeholder="Email"
              className="loginRightInput"
              type="email"
              required
              ref={email}
            />
            <input
              placeholder="password"
              className="loginRightInput"
              type="password"
              required
              minLength={6}
              ref={password}
            />
            <input
              placeholder="Password Again"
              className="loginRightInput"
              type="password"
              required
              minLength={6}
              ref={passwordAgain}
            />
            <button type="submit" className="loginRightLoginButton">
              Sign Up
            </button>
            <Link to="/login" className="link">
              <button className="loginRightCreateButton">
                Log into Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
