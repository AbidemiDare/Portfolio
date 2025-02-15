import Image from "next/image";
import Link from "next/link";
import style from "./projects.module.css";

export default function Project() {
  return (
    <div>
      <section className={style.projects} id="projects">
        <h2 className={style.projectTitle}>My projects</h2>

        <div className={style.projectContainer}>
          {/* project */}
          <div className={style.project}>
            <Link href="https://dwares.netlify.app/" target="_blank">
              <Image
                className={style.projectImg}
                src="/Images/Desktop.png"
                height={220}
                width={120}
                alt="project image"
              />
            </Link>

            <div className={style.projectInfo}>
              <h4 className={style.projectHeader}>An Ecommerce Website</h4>
              <div className={style.projectDescription}>
                A demo ecommerce website that enables user to add items to cart,
                delete item and clear cart.
                <p>
                  <span>Core technologies</span>: ReactJs and NextJs
                </p>
                <h4>Created : 2024</h4>
              </div>
            </div>

            <div className={style.projectLinks}>
              <Link
                className={style.firstLink}
                target="_blank"
                href="https://github.com/AbidemiDare/Dwares"
              >
                GitHub
              </Link>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://dwares.netlify.app/"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* end of single project */}

          {/* project */}
          <div className={style.project}>
            <Link href="https://bbnps.netlify.app/" target="_blank">
              <Image
                className={style.projectImg}
                src="/Images/bbnps.png"
                height={220}
                width={120}
                alt="project image"
              />
            </Link>

            <div className={style.projectInfo}>
              <h4 className={style.projectHeader}>A School Project</h4>
              <div className={style.projectDescription}>
                An overview of how a school website should look like with
                various features.
                <p>
                  <span>Core technology</span>: JavaScript
                </p>
                <h4>Created : 2023</h4>
              </div>
            </div>

            <div className={style.projectLinks}>
              <Link
                target="_blank"
                href="https://github.com/AbidemiDare/BBNPS"
                className={style.firstLink}
              >
                GitHub
              </Link>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://bbnps.netlify.app/"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* end of single project */}

          {/* project */}
          <div className={style.project}>
            <Link
              href="https://quiz-app-blush-chi-85.vercel.app/"
              target="_blank"
            >
              <Image
                className={style.projectImg}
                src="/Images/quizM.PNG"
                height={220}
                width={120}
                alt="project image"
              />
            </Link>

            <div className={style.projectInfo}>
              <h4 className={style.projectHeader}>Quiz App</h4>
              <div className={style.projectDescription}>
                An app that gives you a total of 15minutes to brainstorm on 30
                General knowledge questions
                <p>
                  <span>Core technologies </span>: ReactJs, TypeScript and
                  NextJs
                </p>
                <h4>Created : 2024</h4>
              </div>
            </div>

            <div className={style.projectLinks}>
              <Link
                target="_blank"
                href="https://github.com/AbidemiDare/Quiz-App"
                className={style.firstLink}
              >
                GitHub
              </Link>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://quiz-app-blush-chi-85.vercel.app/"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* end of single project */}

          {/* project */}
          <div className={style.project}>
            <Link href="https://tfsweb.netlify.app/" target="_blank">
              <Image
                className={style.projectImg}
                src="/Images/tfs.png"
                height={220}
                width={120}
                alt="project image"
              />
            </Link>

            <div className={style.projectInfo}>
              <h4 className={style.projectHeader}>A Commerce Project</h4>
              <div className={style.projectDescription}>
                Tfs is a commerce project which was built as a practice app
                <p>
                  <span>Core technologies</span>: JavaScript and TypeScript
                </p>
                <h4>Created : 2022</h4>
              </div>
            </div>

            <div className={style.projectLinks}>
              <Link
                target="_blank"
                href="https://github.com/AbidemiDare/Commerce-web"
                className={style.firstLink}
              >
                GitHub
              </Link>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://tfsweb.netlify.app/"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* end of single project */}
        </div>
      </section>
    </div>
  );
}
