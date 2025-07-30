import React from "react";

import data from "./../data/data.json";
import { useEffect } from "react";
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
  useEffect(() => {
    // Your burger icon handling code here
    let list = document.querySelector("header ul");
    let burgerMenu = document.querySelectorAll("header .small")[0];
    let closeMenu = document.querySelectorAll("header .small")[1];
    // let content = document.querySelector('header + div');

    burgerMenu.addEventListener("click", () => {
      list.style.display = "flex";

      burgerMenu.classList.remove("active");
      setTimeout(() => {
        burgerMenu.style.display = "none";
        closeMenu.classList.add("active");
        list.style.opacity = 1;
        closeMenu.style.opacity = 1;
      }, 100);
    });
    closeMenu.addEventListener("click", () => {
      closeMenu.style.opacity = 0;
      list.style.opacity = 0;
      setTimeout(() => {
        burgerMenu.classList.add("active");
        closeMenu.classList.remove("active");

        list.style.display = "none";
        burgerMenu.style.display = "block";
      }, 400);
    });

    // Cleanup function to remove event listeners
  }, []); // Empty dependency array means this runs once after initial render

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
