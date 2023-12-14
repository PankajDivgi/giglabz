import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

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
    navigate("/menu1");
  };
  const allowSignup =
    name.length > 1 &&
    email.length > 4 &&
    password.length > 4 &&
    confirmpassword === password;
  return (
    <div className="container">
      <div className="form-box">
        <p className="heading">Signup</p>
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
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="inputs-all"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                className="inputs-all"
                type="text"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
            </div>
            <button disabled={!allowSignup} type="submit" className="btn">
              Signup
            </button>
            <Link to="/" className="sign-up-in-btn">
              Have an account? Log in
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
