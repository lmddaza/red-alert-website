import React from "react";
import Link from "next/link";

const NavigationBar = ({ className }) => {
  return (
    <div className="navbar-container px-4 md:px-6 lg:px-8 border-b-4  border-gray-3000">
      <nav className={className}>
        <div
          className="flex justify-between items-center py-2 ml-4 "
          style={{ marginLeft: "52px" }}
        >
          <ul className="flex list-none gap-8">
            <li className="ml-20">
              <Link href="/home">Home</Link>
            </li>
            <li className="ml-1">
              <Link href="/redalert">About the Device</Link>
            </li>
            <li className="ml-1">
              <Link href="/portal">Portal/Data</Link>
            </li>
            <li>
              <Link href="/partners">Partnership</Link>
            </li>
          </ul>
          <div className="ml-1">
            <Link href="/login">
              <button
                className="bg-yellow-500 text-white border-none rounded-md px-4 py-2 mr-20"
                style={{ backgroundColor: "#948d5d", marginRight: "132px" }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
