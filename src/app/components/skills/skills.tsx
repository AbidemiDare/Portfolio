import React from "react";

import { FaCss3Alt } from "react-icons/fa";
import style from "./skills.module.css";
import { FaGit, FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <section className={style.skillsSection}>
        <h2 className={style.skillsTitle}>Skills</h2>

        <div className={style.skills}>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.htmlLogo}`}>
              <FaHtml5 />
            </span>{" "}
            HTML5
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.cssLogo}`}>
              <FaCss3Alt />
            </span>{" "}
            CSS3
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.jsLogo}`}>
              <IoLogoJavascript />
            </span>{" "}
            JavaScript
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.reactLogo}`}>
              <FaReact />
            </span>{" "}
            ReactJs
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.nextLogo}`}>
              <RiNextjsFill />
            </span>{" "}
            NextJs
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.typeLogo}`}>
              <SiTypescript />
            </span>{" "}
            TypeScript
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.gitLogo}`}>
              <FaGit />
            </span>{" "}
            Git
          </div>
          <div className={style.skill}>
            <span className={`${style.skillLogo} ${style.githubLogo}`}>
              <FaGithub />
            </span>{" "}
            GitHub
          </div>
        </div>

        <div className={style.technicalSkills}>
          <h3 className={style.technicalSkillTitle}>Cognitive skills :</h3>
          <ul>
            <li>problem solving skills</li>
            <li>Adaptability</li>
            <li>Critical thinking skills</li>
            <li>Time management</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </section>
    </>
  );
}
