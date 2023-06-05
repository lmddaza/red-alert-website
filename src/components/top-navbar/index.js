import React from "react";
import Link from "next/link";

const NavigationBar = ({ className }) => {
  return (
    <div className="navbar-container">
      <nav className={className}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/redalert">Red Alert</Link>
          </li>
          <li className="nav-item">
            <Link href="/portal">Stationary Portal</Link>
          </li>
          <li className="nav-item">
            <Link href="/partners">Partnership</Link>
          </li>
          <li className="nav-item">
            <Link href="/aboutUs">About Us</Link>
          </li>
        </ul>
        <div className="login-buttons">
          <Link href="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
