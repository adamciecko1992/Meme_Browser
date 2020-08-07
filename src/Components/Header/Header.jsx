import React from "react";
import "./Header.scss";
import logo from "../../img/logo.jpeg";
function Header() {
  return (
    <header className=" Header row justify-content-between bg-dark align-items-center">
      <div className="logo ml-5">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="btn-group h-25 mr-5 Header__buttonholder">
        <button className="btn btn-light">Log In</button>
        <button className="btn btn-light">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
