import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginLeft">
          <h3 className="loginLeftLogo">SanjivSocial</h3>
          <span className="loginLeftDesc">
            Connect with friends and the world around you on SanjivSocial
          </span>
        </div>
        <form className="loginRight">
          <input
            placeholder="Email"
            type="email"
            required
            className="loginRightInput"
          />
          <input
            placeholder="Password"
            type="password"
            required
            maxLength="6"
            className="loginRightInput"
          />
          <button className="loginRightLoginButton">Login</button>
          <span className="loginRightForgot">Forgot Password?</span>
          <button className="loginRightCreateButton">
            Create a New Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
