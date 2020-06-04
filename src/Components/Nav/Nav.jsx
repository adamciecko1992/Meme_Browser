import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav col-2 bg-white pt-3">
      <ul className="list-group-flush text-center">
        <li className="list-group-item bg-primary bg-danger">
          <NavLink className="text-white text-decoration-none" to={"/"}>
            Regular
          </NavLink>
        </li>
        <li className="list-group-item px-0 bg-secondary">
          <NavLink
            className="text-white text-decoration-none"
            exact
            to={"/hot"}
          >
            Hot
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
