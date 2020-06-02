import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className=" Header row justify-content-between bg-dark align-items-center">
      <div className="Header_brand col-6 h-75 mb-3 ml-3"></div>
      <div className="btn-group col-2 h-25  ">
        <button className="btn btn-outline-light">Log In</button>
        <button className="btn btn-outline-light">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
