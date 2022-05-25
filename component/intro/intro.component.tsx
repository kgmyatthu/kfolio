import type { NextPage } from "next";
import styles from './intro.module.css';
import Image from "next/image";
import profileImg from '../../assets/img/profile.png';
import { classNameHelper as css } from "../../utils/utils";
import ShadowButton from "../buttons/shadowButton.component";
import { useRef } from "react";

const Intro: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={css(styles, "container")}>
        <div className={css(styles,"child col-1st")}>
          <div className={styles.name}>
            <div>KAUNG<br/><span style={{color:'#8c52ff'}}>MYAT</span><br/>THU</div>
            <ShadowButton
              content="Let's connect"
              action=""
              className={styles['btn']}/>
          </div>
        </div>  
        <div className={css(styles,"child col-2st")}>
          <Image src={profileImg} alt="profile" layout="responsive" className={styles['pp-img']}/>
        </div>  
        <div className={css(styles,"child col-3st")}>
          <div>SOFTWARE<br/>
            <span style={{color:'#5ce1e6'}}>ENGINEER</span>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Intro
