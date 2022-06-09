import type { NextPage } from "next";
import styles from './intro.module.css';
import Image from "next/image";
import profileImg from '../../assets/img/profile2.png';
import { classNameHelper as css, imgLoader } from "../../utils/utils";
import ShadowButton from "../buttons/shadowButton.component";
import { useRef } from "react";

const Intro: NextPage = () => {
  return (
      <div className={css(styles, "container")}>
        <div className={css(styles,"child col-1st")}>
          <div className={styles.name}>
            <div>KAUNG<br/><span style={{color:'#8c52ff'}}>MYAT</span><br/>THU</div>
            <div className={styles['secondary-title']}>SOFTWARE<br/>
              <span style={{color:'#5ce1e6'}}>ENGINEER</span>
            </div>
            <ShadowButton
              content="Let's connect"
              action=""
              className={styles['btn']}/>
          </div>
        </div>  
        <div className={css(styles,"child col-2nd")}>
          <Image 
            unoptimized={true}
            loader={imgLoader} 
            src={profileImg} 
            alt="profile" 
            layout="responsive" 
            className={styles['pp-img']}/>
        </div>  
        <div className={css(styles,"child col-3rd")}>
          <div>SOFTWARE<br/>
            <span style={{color:'#5ce1e6'}}>ENGINEER</span>
          </div>
        </div>  
      </div>
  )
}

export default Intro
