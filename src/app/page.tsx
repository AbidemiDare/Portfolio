"use client";

import Link from "next/link";
import style from "./page.module.css";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaUser } from "react-icons/fa6";
import Image from "next/image";
import Typed from "typed.js";
import { BsPersonWorkspace } from "react-icons/bs";
import About from "./components/about/about";
import Project from "./components/projects/project";
import Skills from "./components/skills/skills";

// interface homeProps {
//   bar?: boolean;
// }

const Home = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);

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

        {/* <div className={style.underline}></div> */}
        <Project />
        <Skills />
      </div>
    </>
  );
};

export default Home;
