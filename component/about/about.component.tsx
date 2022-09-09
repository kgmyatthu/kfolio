
import type { NextPage } from "next";
import styles from './about.module.css';
import profileImg from '../../assets/img/profile.png';
import { classNameHelper as css, imgLoader } from "../../utils/utils";
import { useRef } from "react";

const About: NextPage = () => {
  return (
      <div id="about" className={css(styles, "container")}>
        <div className={styles.child}>
            <span>Hi,</span>
            <div>
                My name is Kaung Myatthu, (pronunced kow matthew). 
                I'm a software engineer, specifically build things for web, been doing that professional for 3years now.
                Currently, i'm in a team building a truly scalable decentralized technology protocol for the web. 
            </div>
        </div>
      </div>
  )
}

export default About
