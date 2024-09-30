import style from "./footer.module.css";
import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className={style.footer}>
        <p>
          &copy; <span>AbidemiDare </span> <span>{currentYear}</span>
        </p>
      </section>
    </div>
  );
};

export default Footer;
