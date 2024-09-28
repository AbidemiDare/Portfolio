import Link from "next/link";
import style from "./about.module.css";

export default function About() {
  return (
    <div>
      <section className={style.aboutSection}>
        <h3 className={style.aboutHeader}>About me</h3>

        <div className={style.aboutUnderline}></div>
        <div className={style.aboutInfo}>
          <p>
            I&apos;m{" "}
            <span>
              <b>Adewakun Oluwadamilare</b>
            </span>
            , a Computer Science student at the{" "}
            <span>
              <b>University of Lagos</b>
            </span>{" "}
            and a passionate Frontend Developer. I specialize in creating
            responsive and user-friendly web applications, blending design and
            functionality.
          </p>
          <p>
            {" "}
            With over 2 years of experience, I&apos;ve developed innovative and
            systematic web solutions to help solve complex problems. My goal has
            always been to create systems that not only look great but are also
            highly efficient and user-centric. I thrive on the challenge of
            turning ideas into fully functional and dynamic applications, paying
            attention to every detail of the user experience. My academic
            background complements my passion for crafting beautiful and
            efficient web applications.
          </p>
          <p>
            My tech journey began in March 2022 during a prolonged school
            strike. Eager to make productive use of my time, I initially
            considered Python but was advised to explore web design. Although
            hesitant at first, I quickly found joy in learning and building,
            fueling my dedication to this field.
          </p>
          <p>
            As i continue my studies in Computer Science, I&apos;m motivated to
            pushing my limits and contributing to the rapidly evolving tech
            landscape. Connect with me on{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/adewakun-oluwadamilare-641b22281/"
            >
              <span className={style.linkSpan}>LinkedIn</span>
            </Link>
            , view my projects on{" "}
            <Link target="_blank" href="https://github.com/AbidemiDare">
              <span className={style.linkSpan}>GitHub</span>
            </Link>{" "}
            and reach me directly at{" "}
            <Link
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox"
            >
              <span className={style.linkSpan}>Email.</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
