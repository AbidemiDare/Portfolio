import Image from "next/image";
import Link from "next/link";
import style from "./projects.module.css";

export default function Project() {
  return (
    <div>
      <section className={style.projects}>
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
              </div>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://dwares.netlify.app/"
              >
                Dwares
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
              </div>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://bbnps.netlify.app/"
              >
                Bbnps
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
              </div>
              <Link
                target="_blank"
                className={style.projectLink}
                href="https://bbnps.netlify.app/"
              >
                Bbnps
              </Link>
            </div>
          </div>
          {/* end of single project */}
        </div>
      </section>
    </div>
  );
}
