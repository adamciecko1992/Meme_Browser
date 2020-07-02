import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  const [active, changeActive] = useState({ hot: "", regular: "active" });
  const clickHandler = (e) => {
    if (e.target.innerText === "Regular") {
      changeActive({ hot: "", regular: "active" });
    } else if (e.target.innerText === "Hot") {
      changeActive({ hot: "active", regular: "" });
    }
  };
  return (
    <div className="Nav col-lg-2 col-sm-3 bg-white pt-3">
      <ul className="list-group-flush text-center">
        <NavLink
          onClick={clickHandler}
          className="text-white text-decoration-none"
          to={"/"}
        >
          <li
            className={`list_button list-group-item bg-primary ${active.hot}`}
          >
            Regular
          </li>
        </NavLink>
        <NavLink
          onClick={clickHandler}
          className="text-white text-decoration-none"
          exact
          to={"/hot"}
        >
          <li
            className={`list_button list-group-item px-0 bg-secondary ${active.regular}`}
          >
            Hot
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
