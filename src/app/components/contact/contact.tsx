import React from "react";
import style from "./contact.module.css";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <section className={style.contact} id="contact">
        <h2 className={style.contactTitle}>Let&apos;s connect</h2>

        <div className={style.contactWrapper}>
          <p className={style.contactDescription}>
            I&apos;d love to hear from you! Whether you have a job for me,
            project in mind, or just want to say hello, feel free to reach out
            by clicking any of the social media accounts.
          </p>
          <div className={style.contactDetails}>
            <div className={style.contactLink}>
              <span className={style.contactEmail}>
                <SiGmail />
              </span>
              <Link
                target="_blank"
                href="mailto:oluwadamilareadewakun@gmail.com"
                className={style.contactSocial}
              >
                {" "}
                oluwadamilareadewakun@gmail.com
              </Link>
            </div>

            <div className={style.contactLink}>
              <span className={style.contactLinkedin}>
                <FaLinkedin />
              </span>{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/adewakun-oluwadamilare-641b22281/"
                className={style.contactSocial}
              >
                {" "}
                Adewakun Oluwadamilare
              </Link>
            </div>

            <div className={style.contactLink}>
              <span className={style.contactFacebook}>
                <FaGithub />
              </span>
              <Link
                target="_blank"
                href="https://github.com/AbidemiDare"
                className={style.contactSocial}
              >
                {" "}
                AbidemiDare
              </Link>{" "}
            </div>

            <div className={style.contactLink}>
              <span className={style.contactGitHub}>
                <FaXTwitter />
              </span>
              <Link
                target="_blank"
                href="https://x.com/Abidemi_Darey"
                className={style.contactSocial}
              >
                {" "}
                Abidemi_Darey
              </Link>{" "}
            </div>

            <div className={style.contactLink}>
              <span className={style.contactIg}>
                <FaInstagram />
              </span>
              <Link
                target="_blank"
                href="https://www.instagram.com/abidemi.dare/"
                className={style.contactSocial}
              >
                {" "}
                abidemi.dare
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
