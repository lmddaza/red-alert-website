import React from "react";
import Link from "next/link";

const NavigationBar = ({ className }) => {
  return (
    <div className="navbar-container">
      <nav className={className}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/redalert">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/redalert">Red Alert </Link>
          </li>
          <li className="nav-item">
            <Link href="/portal">Portal</Link>
          </li>
          <li className="nav-item">
            <Link href="/partners">Partnership</Link>
          </li>
          <li className="nav-item">
            <Link href="/aboutUs">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
