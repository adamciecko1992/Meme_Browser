import React, { Component } from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="Nav col-2 bg-white pt-3">
      <ul className="list-group-flush text-center">
        <li className="list-group-item bg-primary bg-danger">Hot</li>
        <li className="list-group-item px-0 bg-secondary">Regular</li>
      </ul>
    </div>
  );
}

export default Nav;
