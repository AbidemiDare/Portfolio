"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import style from "./navbar.module.css";

interface navProps {
  bar?: boolean;
  openBar?: VoidFunction;
  // Navbar: VoidFunction;
}

export default function Navbar({ bar, openBar }: navProps) {
  const [theme, setTheme] = useState(false);

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

  return (
    <div>
      <nav className={style.navBar}>
        <Link
          className={style.topLink}
          href="https://www.twitter.com/abidemi.darey"
        >
          <span>A</span>
          <span>D</span>
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
      </nav>
    </div>
  );
}
