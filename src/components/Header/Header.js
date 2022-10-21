import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="menu-items">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
        <p>{user?.email}</p>
      </div>
    </nav>
  );
};

export default Header;
