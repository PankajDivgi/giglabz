import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    navigate("/dashboard");
  };
  const allowLogin = name.length > 1 && email.length > 4 && password.length > 4;
  return (
    <div className="container">
      <div className="form-box">
        <p className="heading">Login</p>
        <div className="body-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                className="inputs-all"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="inputs-all"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="inputs-all"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button disabled={!allowLogin} type="submit" className="btn">
              Login
            </button>
            <Link to="/signup" className="sign-up-in-btn">
              Don't have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
