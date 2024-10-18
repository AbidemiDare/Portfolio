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
      document.body.style.background = "#800020";
      document.body.style.color = "#ffffff";
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
      {/* <Home bar={bar}/> */}
      <nav
        className={`${style.navBar} ${fixedNav ? style.fixed : " "} ${
          theme ? style.brown : style.dark
        }`}
      >
        <div className={style.navWrapper}>
          <button className={style.navBtn}>
            <a
              target="_blank"
              href="./adewakun-oluwadamilare.pdf"
              download="adewakun-oluwadamilare.pdf"
            >
              Abidemi.<span>CV</span>
            </a>
          </button>

          <button className={style.navTheme} onClick={handleTheme}>
            {theme ? (
              <FaMoon className={style.themeMoon} />
            ) : (
              <FaSun className={style.themeSun} />
            )}
          </button>

          <ul className={style.navLinks}>
            <li className={style.navLink}>
              <Link href="#projects" className={style.link}>
                projects
              </Link>
            </li>
            <li className={style.navLink}>
              <Link href="#contact" className={style.link}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className={style.navHorizontal} />

      <Menu bar={bar} setBar={setBar} />
    </div>
  );
}
