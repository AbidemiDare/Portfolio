"use client";

import React, { useState } from "react";
import Link from "next/link";
import style from "./page.module.css";
import { useEffect, useRef } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";
import Image from "next/image";
import Typed from "typed.js";
import { BsPersonWorkspace } from "react-icons/bs";
import About from "./components/about/about";
import Project from "./components/projects/project";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "React Developer", "Computer Scientist"],
      typeSpeed: 50,
      backSpeed: 60,
      loop: true,
    };

    if (typedElement.current) {
      const typed = new Typed(typedElement.current, options);

      return () => typed.destroy();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120 && !scroll) {
        setScroll(true);
      } else if (window.scrollY === 0 && scroll) {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <div className={style.container}>
        <div className={style.heroContainer}>
          <section className={style.hero}>
            <div className={style.portfolioImgContainer}>
              <Image
                className={style.portfolioImg}
                src="/Images/portfolioImg.jpg"
                width={180}
                height={180}
                alt="portfolio img"
              />
            </div>

            <div className={style.heroInfo}>
              <h1 className={style.heroName}>
                <span>
                  <FaUser />
                </span>{" "}
                Adewakun Oluwadamilare{" "}
              </h1>
              <h2 className={style.heroTitle}>
                <BsPersonWorkspace className={style.heroBsIcon} />{" "}
                <span ref={typedElement}></span>
              </h2>
            </div>

            <Link href="/contact" className={style.heroBtn}>
              Hire me <FaArrowRight className={style.heroArrow} />
            </Link>
          </section>

          <About />
        </div>

        <div
          className={`${style.fixedLinks} ${scroll ? style.showFixed : " "}`}
        >
          <div className={style.fixedWrapper}>
            <button className={`${style.fixedBtn} ${style.fixedEnvelope}`}>
              <Link
                target="_blank"
                href="mailto:oluwadamilareadewakun@gmail.com"
              >
                {" "}
                <FaEnvelope />
              </Link>
            </button>
            <button className={`${style.fixedBtn} ${style.fixedLinkedIn}`}>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/adewakun-oluwadamilare-641b22281/"
              >
                {" "}
                <FaLinkedin />
              </Link>
            </button>
            <button className={`${style.fixedBtn} ${style.fixedGithub}`}>
              <Link target="_blank" href="https://github.com/AbidemiDare">
                {" "}
                <FaGithub />
              </Link>{" "}
            </button>
            <button className={`${style.fixedBtn} ${style.fixedX}`}>
              <Link target="_blank" href="https://x.com/Abidemi_Darey">
                <FaTwitter />{" "}
              </Link>{" "}
            </button>
          </div>
        </div>

        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
