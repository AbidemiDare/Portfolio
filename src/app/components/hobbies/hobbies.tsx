import { FaLaptopCode } from "react-icons/fa6";
import { FcReading } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";
import { CiPlane } from "react-icons/ci";
import style from "./hobbies.module.css";

const Hobbies = () => {
  return (
    <div>
      <section className={style.hobbies}>
        <h2 className={style.hobbyTitle}>Hobbies</h2>
        <div className={style.hobbiesWrapper}>
          <div className={style.hobby}>
            <span>
              <FaLaptopCode />
            </span>
            <h5 className={style.hobbyText}>Coding</h5>
          </div>

          <div className={style.hobby}>
            <span>
              <CiPlane />
            </span>
            <h5 className={style.hobbyText}>Travelling</h5>
          </div>

          <div className={style.hobby}>
            <span>
              <TfiWrite />
            </span>
            <h5 className={style.hobbyText}>Writing</h5>
          </div>

          <div className={style.hobby}>
            <span>
              <FcReading />
            </span>
            <h5 className={style.hobbyText}>Reading</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
