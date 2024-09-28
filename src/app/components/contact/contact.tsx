import React from "react";
import style from "./contact.module.css";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <section className={style.contact}>
        <h2 className={style.contactTitle}>Let&apos;s connect</h2>
        <p className={style.contactDescription}>
          I&apos;d love to hear from you! Whether you have a job for me, project
          in mind, or just want to say hello, feel free to reach out.
        </p>

        <div className={style.contactDetails}>
          <div className={style.contactLink}>
            <Link target="_blank" href="mailto:oluwadamilareadewakun@gmail.com">
              {" "}
              <FaEnvelope />
              oluwadamilareadewakun@gmail.com
            </Link>
          </div>

          <div className={style.contactLink}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/adewakun-oluwadamilare-641b22281/"
            >
              {" "}
              <FaLinkedin /> @Adewakun Oluwadamilare
            </Link>
          </div>

          <div className={style.contactLink}>
            <Link target="_blank" href="https://github.com/AbidemiDare">
              {" "}
              <FaFacebook />
              @AbidemiDare
            </Link>{" "}
          </div>

          <div className={style.contactLink}>
            <Link target="_blank" href="https://x.com/Abidemi_Darey">
              {" "}
              <FaGithub />
              @Abidemi_Darey
            </Link>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
