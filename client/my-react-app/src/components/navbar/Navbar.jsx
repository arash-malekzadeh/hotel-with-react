import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">مدیریت اسکان</span>
          <div className="navItems">
            <button className="navButton">ثبت نام</button>
            <button className="navButton"> ورود</button>
          </div>
        </div>
      </div>
    </>
  );
}
