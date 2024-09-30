"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import style from "./navbar.module.css";
import Menu from "../menu/menu";


export default function Navbar() {
  const [bar, setBar] = useState<boolean>(false);
  const [theme, setTheme] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !fixedNav) {
        setFixedNav(true);
      } else if (window.scrollY === 0 && fixedNav) {
        setFixedNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedNav]);

  useEffect(() => {
    if (theme) {
      document.body.style.background = "#ffffff";
      document.body.style.color = "#000000";
    } else {
      document.body.style.background = "#000000";
      document.body.style.color = "#ffffff";
    }

    return () => {
      document.body.style.background = "#000000";
      document.body.style.color = "#ffffff";
    };
  }, [theme]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const openBar = () => {
    setBar(!bar);
  };

  return (
    <div>
      {/* <Home bar={bar}/> */}
      <nav className={`${style.navBar} ${fixedNav ? style.fixed : " "}`}>
        <div className={style.navWrapper}>
          <Link
            className={style.topLink}
            href="https://www.twitter.com/abidemi.darey"
          >
            <span className={style.topLinkOne}>Abidemi</span>
            <span className={style.topLinkTwo}>Dare</span>
          </Link>

          <button className={style.navTheme} onClick={handleTheme}>
            {theme ? (
              <FaMoon className={style.themeMoon} />
            ) : (
              <FaSun className={style.themeSun} />
            )}
          </button>

          <ul className={style.navLinks}>
            <li className={style.navLink}>
              <Link href="/about" className={style.link}>
                about
              </Link>
            </li>
            <li className={style.navLink}>
              <Link href="/projects" className={style.link}>
                projects
              </Link>
            </li>
            <li className={style.navLink}>
              <Link href="/contact" className={style.link}>
                contact
              </Link>
            </li>
          </ul>

          <button
            className={`${style.faBar} ${bar ? style.show : " "}`}
            onClick={openBar}
          >
            <div className={style.barOne}></div>
            <div className={style.barTwo}></div>
            <div className={style.barThree}></div>
          </button>
        </div>
      </nav>

      <hr className={style.navHorizontal} />

      <Menu bar={bar} setBar={setBar} />
    </div>
  );
}
