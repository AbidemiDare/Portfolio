"use client";

import Link from "next/link";
import style from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { GoProjectSymlink } from "react-icons/go";
import Navbar from "./components/navbar/navbar";
import Typed from "typed.js";
import Menu from "./components/menu/menu";

export default function Home() {
  const [bar, setBar] = useState(false);
  const typedElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "React Developer", "Computer Scientist"],
      typeSpeed: 50,
      backSpeed: 60,
      loop: false,
    };

    const typed = new Typed(typedElement.current!, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const openBar = () => {
    setBar(!bar);
  };

  const closeBar = () => {
    setBar(bar === true ? false : true);
  };

  return (
    <div className={style.pageContainer}>
      <div className={style.container}>
        <Navbar bar={bar} openBar={openBar} />
        <Menu bar={bar} closeBar={closeBar} />

        {bar && (
          <section className={style.hero}>
            <Image
              className={style.portfolioImg}
              src="/Images/portfolioImg.jpg"
              width={200}
              height={200}
              alt="portfolio img"
            />

            <div className={style.heroInfo}>
              <h2 className={style.heroTitle}>
                Hi, I&apos;m a <span ref={typedElement}></span>
              </h2>
              <p className={style.heroCourse}>
                Creating modern and User-friendly Applications
              </p>
              <div className={style.heroBtns}>
                <Link
                  href="/projects"
                  className={`${style.heroBtn} ${style.heroProjectBtn}`}
                >
                  Projects <GoProjectSymlink className={style.heroIcon} />
                </Link>
                <Link
                  href="/contact"
                  className={`${style.heroBtn} ${style.heroContactBtn}`}
                >
                  Contact me <FaArrowRight className={style.heroIcon} />
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
