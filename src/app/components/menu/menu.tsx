"use client";

import React from "react";
import { motion } from "framer-motion";
import style from "./menu.module.css";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

interface menuProps {
  bar?: boolean;
  setBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<menuProps> = ({ bar, setBar }) => {
  const closeBar = () => {
    setBar(bar === true ? false : true);
  };

  return (
    <div>
      <motion.div
        className={`${style.menuBar} ${bar ? style.show : " "}`}
        initial={{ opacity: 0, display: "none", x: 200 }}
        animate={bar ? { opacity: 1, display: "block", x: 0 } : {}}
        transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
      >
        <FaXmark className={style.closeMenuBar} onClick={closeBar} />
        <ul className={style.menuLinks}>
          <li className={style.menuLink}>
            <Link href="/about" className={style.link}>
              about
            </Link>
          </li>
          <li className={style.menuLink}>
            <Link href="/projects" className={style.link}>
              projects
            </Link>
          </li>
          <li className={style.menuLink}>
            <Link href="/contact" className={style.link}>
              contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Menu;
