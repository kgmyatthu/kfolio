
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
                I'm a software engineer, specifically build things for web. 
                I went to college to study computer science for three years and dropped out of it due to the political situation here in Myanmar. 
                Now I'm in a team building a truly scalable decentralized technology protocol for the web. 
                I like writing technical articles, playing video games and music in my spare time.
                <br/>
                I'm also unhealthly into watches, primarily mechanical watches. 
                They're fascinating, such complex solutions to a seemingly simple task of telling time, Very similar to computer algorithms, doesn't it? . . .
            </div>
        </div>
      </div>
  )
}

export default About
