"use client";

import Link from "next/link";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaXmark } from "react-icons/fa6";

export default function Home() {
  const [bar, setBar] = useState(false);
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

  const openBar = () => {
    setBar(!bar);
  };

  const closeBar = () => {
    setBar(bar === true ? false : true);
  };

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
            <Link href="" className={style.link}>
              about
            </Link>
          </li>
          <li className={style.navLink}>
            <Link href="" className={style.link}>
              projects
            </Link>
          </li>
          <li className={style.navLink}>
            <Link href="" className={style.link}>
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

      <motion.div
        className={`${style.menuBar} ${bar ? style.show : " "}`}
        initial={{ opacity: 0, display: "none", x: 200 }}
        animate={bar ? { opacity: 1, display: "block", x: 0 } : {}}
        transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
      >
        <FaXmark className={style.closeMenuBar} onClick={closeBar} />
        <ul className={style.menuLinks}>
          <li className={style.menuLink}>
            <Link href="" className={style.link}>
              about
            </Link>
          </li>
          <li className={style.menuLink}>
            <Link href="" className={style.link}>
              projects
            </Link>
          </li>
          <li className={style.menuLink}>
            <Link href="" className={style.link}>
              contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
