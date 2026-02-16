import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
        <NavLink to="/" className="nav-bar__link">Home</NavLink>
        <NavLink to='/account" className="nav-bar__link">Account</NavLink>'