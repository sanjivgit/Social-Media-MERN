import axios from "../../axios";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
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
        <form className="loginRight" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            className="loginRightInput"
            ref={email}
          />
          <input
            placeholder="Password"
            type="password"
            minLength={6}
            className="loginRightInput"
            ref={password}
          />
          <button
            type="submit"
            className="loginRightLoginButton"
            disabled={isFetching}
          >
            {isFetching ? (
              <CircularProgress color="inherit" size={25} />
            ) : (
              "Login"
            )}
          </button>
          <span className="loginRightForgot">Forgot Password?</span>
          <Link to="/register" className="link">
            <button className="loginRightCreateButton">
              Create a New Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
