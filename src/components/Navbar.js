import React from "react";

import data from "./../data/data.json";

import icon from "./../assets/shared/icon-hamburger.svg";
import close from "./../assets/shared/icon-close.svg";
import Logo from "./../assets/shared/logo.svg";

const Navbar = ({ page, setPage }) => {
  let navigations = [];
  let x = 1;
  for (let key in data) {
    if (key == page) {
      navigations.push(
        <li
          className="active"
          key={key}
          onClick={() => {
            setPage(key.toLocaleLowerCase());
          }}
        >
          <span>0{x}</span>
          {key.toLocaleUpperCase()}
        </li>
      );
    } else {
      navigations.push(
        <li
          key={key}
          onClick={() => {
            setPage(key.toLocaleLowerCase());
          }}
        >
          <span>0{x}</span>
          {key.toLocaleUpperCase()}
        </li>
      );
    }
    x++;
  }
  return (
    <header>
      <img src={Logo} />
      <hr />
      <ul>
        <li
          onClick={() => {
            setPage("home");
          }}
          key="home"
          className={page == "home" ? "active" : ""}
        >
          <span>00</span>HOME
        </li>
        {navigations}
      </ul>
      <img className="small " src={icon} alt="burger" />
      <img className="small" src={close} alt="close" />
    </header>
  );
};
export default Navbar;
