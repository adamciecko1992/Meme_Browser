import React, { useState} from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  const [active, changeActive] = useState({ hot: '', regular:'active' });
  const clickHandler = (e) => {
    if (e.target.innerText === "Regular") {
      changeActive({ hot: '', regular: "active" })
    } else if (e.target.innerText === "Hot") {
      changeActive({ hot: 'active', regular: "" })
    }
  }
  return (
    
    <div className="Nav col-2 bg-white pt-3">
      <ul className="list-group-flush text-center">
        <li  className={`list_button list-group-item bg-primary ${active.hot}`}>
          <NavLink onClick={clickHandler} className="text-white text-decoration-none" to={"/"}>
            Regular
          </NavLink>
        </li>
        <li  className={`list_button list-group-item px-0 bg-secondary ${active.regular}`}>
          <NavLink
            onClick={clickHandler}
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
