import React from "react";

import { FaCss3Alt } from "react-icons/fa";
import style from "./skills.module.css";
import { FaGit, FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <section className={style.skillsSection}>
        {/* skillls */}
        <div className={style.skills}>
          <h2 className={style.skillsTitle}>Skills</h2>
          <div className={style.skillsWrapper}>
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
              <span className={`${style.skillLogo} ${style.cssLogo}`}>
                <SiTailwindcss />
              </span>{" "}
              Tailwind Css
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
        </div>

        {/* Technical skills */}
        <div className={style.technicalSkills}>
          <h3 className={style.technicalSkillTitle}>Cognitive skills :</h3>
          <ul className={style.skillLists}>
            <li className={style.skillList}>
              <div className={style.circleContainer}>
                <div className={style.circle} data-percentage="90"></div>
                <div className={style.skillText}>
                  <span>90%</span>
                </div>
              </div>
              <h3>Problem solving</h3>
            </li>

            <li className={style.skillList}>
              <div className={style.circleContainer}>
                <div className={style.circle} data-percentage="70"></div>
                <div className={style.skillText}>
                  <span>70%</span>
                </div>
              </div>
              <h3>Critical thinking</h3>
            </li>

            <li className={style.skillList}>
              <div className={style.circleContainer}>
                <div className={style.circle} data-percentage="70"></div>
                <div className={style.skillText}>
                  <span>75%</span>
                </div>
              </div>
              <h3>Time management</h3>
            </li>

            <li className={style.skillList}>
              <div className={style.circleContainer}>
                <div className={style.circle} data-percentage="85"></div>
                <div className={style.skillText}>
                  <span>85%</span>
                </div>
              </div>
              <h3>Collaboration</h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
