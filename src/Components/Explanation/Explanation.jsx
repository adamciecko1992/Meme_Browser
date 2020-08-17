import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Explanation.module.scss";

export const Explanation = () => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const expClassCheck = () => {
    if (width < 900 && visible) {
      return classes.in;
    } else if (width > 900) {
      return classes.in;
    } else {
      return classes.out;
    }
  };
  const expClass = expClassCheck();
  const icon = visible ? faArrowAltCircleRight : faArrowAltCircleLeft;
  const changeVisibleOnResize = (e) => {
    setWidth(e.srcElement.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeVisibleOnResize);
    return () => {
      window.removeEventListener("resize", changeVisibleOnResize);
    };
  }, []);
  console.log(expClass);

  return (
    <>
      <section className={`${classes.explanation} ${expClass} pt-5`}>
        <h4 className="mt-4">
          This is a simple project made for the end of my studies.
        </h4>
        <hr />
        <p>It uses</p>
        <ul className="list-group">
          <li className="list-group-item">React</li>
          <li className="list-group-item">Redux</li>
          <li className="list-group-item">Scss</li>
          <li className="list-group-item">Css Modules</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">Imgflip API to get memes</li>
        </ul>
        <p className="mt-3 p-2">
          It sorts memes by their <b>upvotes</b> and <b>downvotes</b> and put
          them on the right section : <span className="text-danger">hot</span>{" "}
          or <span className="text-primary">regular</span>
          <br />
          <br />
          If upvotes - downvotes &gt; 5 <b>Meme</b> is considered{" "}
          <span className="text-danger">Hot</span>
        </p>
      </section>
      <button className={classes.toggle} onClick={() => setVisible(!visible)}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};
