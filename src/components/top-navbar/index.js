import React from "react";

const NavigationBar = ({ className }) => {
  return (
    <div className="navbar-container">
      <nav className={className}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Red Alert</a>
          </li>
          <li className="nav-item">
            <a href="#">Partnership</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
