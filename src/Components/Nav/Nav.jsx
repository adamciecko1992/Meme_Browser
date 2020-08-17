import React, { useState } from "react";
import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [active, changeActive] = useState({ hot: "", regular: classes.active });
  const [visible, setVisible] = useState(true);

  const clickHandler = (e) => {
    if (e.target.innerText === "Regular") {
      changeActive({ hot: "", regular: classes.active });
    } else if (e.target.innerText === "Hot") {
      changeActive({ hot: classes.active, regular: "" });
    }
  };

  return (
    <>
      <button
        className={classes.Nav__toggle}
        onClick={() => setVisible(!visible)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav
        className={`${classes.Nav} col-lg-2 col-sm-3 bg-white pt-4`}
        style={{ display: visible ? "block" : "none" }}
      >
        <ul className="list-group-flush text-center mt-4 pt-4">
          <NavLink
            onClick={clickHandler}
            className="text-white text-decoration-none"
            exact
            to={"/hot"}
          >
            <li
              className={`list_button list-group-item px-0 bg-danger ${active.regular}`}
            >
              Hot
            </li>
          </NavLink>
          <NavLink
            onClick={clickHandler}
            className="text-white text-decoration-none"
            to={"/"}
          >
            <li className={`list-group-item bg-primary ${active.hot}`}>
              Regular
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
