import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginLeft">
          <h3 className="loginLeftLogo">SanjivSocial</h3>
          <span className="loginLeftDesc">
            Connect with friends and the world around you on SanjivSocial
          </span>
        </div>

        <form>
          <div className="loginRight">
            <input
              placeholder="Username"
              className="loginRightInput"
              type="text"
              required
            />
            <input
              placeholder="Email"
              className="loginRightInput"
              type="email"
              required
            />
            <input
              placeholder="password"
              className="loginRightInput"
              type="password"
              required
              maxLength={6}
            />
            <input
              placeholder="Password Again"
              className="loginRightInput"
              type="password"
              required
              maxLength={6}
            />
            <button className="loginRightLoginButton">Sign Up</button>
            <button className="loginRightCreateButton">Log into Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
