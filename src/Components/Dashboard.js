import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const Dashboard = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    navigate('/')
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="topbar">
        <p style={{ margin: 0 }}>Dashboard</p>
        <div style={{ display: "flex" }}>
          <p className="nav-right">{user.name}</p>
          <p className="nav-right">{user.email}</p>
          <button className="logout" onClick={(e) => handleLogout(e)}>
            Logout
          </button>
        </div>
      </div>
      <div className="sidebar">
        <Link to="/menu1" className="menus">
          Menu1
        </Link>
        <Link to="/menu2" className="menus">
          Menu2
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
