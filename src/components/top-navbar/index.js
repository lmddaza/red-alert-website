import React from "react";
import Link from "next/link";

const NavigationBar = ({ className }) => {
  return (
    <div className="navbar-container">
      <nav className={className}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/redalert">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#">Red Alert</a>
          </li>
          <li className="nav-item">
            <Link href="/partners">
              <a>Partnership</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
