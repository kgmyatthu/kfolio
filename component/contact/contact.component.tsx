// @ts-ignore
import BIRDS from 'vanta/dist/vanta.birds.min';
import type { NextPage } from "next";
import styles from './contact.module.css';
import { classNameHelper as css} from "../../utils/utils";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import * as THREE from "three";


const Contact: NextPage = () => {


  // const p5 = dynamic(() =>{ return  import('p5')}, {ssr: false}) 
  const contactRef = useRef(null) as unknown as React.MutableRefObject<HTMLInputElement>;
  const [vantaEffect, setVantaEffect] = useState(0)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: contactRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0xfc0000,
        colorMode: "lerpGradient",
        birdSize: 1.40,
        wingSpan: 20.00,
        separation: 45.00,
        alignment: 51.00,
        cohesion: 42.00,
        quantity: 4.00
      }))
    }
    return () => {
      // if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
      <div id="contact" ref={contactRef} className={css(styles, "container")}>
        <div className={styles.gradient}></div>
        <div className={styles.child}>
              <h1 style={{fontStyle:"italic"}}>Keep In Touch</h1>

            <p> My inbox is always open, you can reach out to me for whether you have question or just want to say hi. </p>
            <span className={styles.icons} style={{margin:"0.5rem"}}>
              <a href="https://github.com/kgmyatthu" target="_blank" rel="noreferrer">
                <FaGithub size={20}/>
              </a>
            </span>
            <span className={styles.icons} style={{margin:"0.5rem"}}>
              <a href="https://www.facebook.com/kaungmyatthu29/" target="_blank" rel="noreferrer">
                <FaFacebook size={20}/>
              </a>
            </span>
            <span className={styles.icons} style={{margin:"0.5rem"}}>
              <a href="https://twitter.com/kgmyatthu" target="_blank" rel="noreferrer">
                <FaTwitter size={20}/>
              </a>
            </span>
            <span className={styles.icons} style={{margin:"0.5rem"}}>
              <a href="https://www.linkedin.com/in/kaung-myat-thu-3925531b6/" target="_blank" rel="noreferrer">
                <FaLinkedin size={20}/>
              </a>
            </span>
            <p className={styles.mail}>
                <a href="mailto:kaung@shardus.com">kaung@shardus.com</a> 
            </p>
        </div>
      </div>
  )
}

export default Contact

// import { P5Instance, Sketch, P5WrapperProps } from 'react-p5-wrapper'
// const ReactP5Wrapper = dynamic(() => import('p5')
//     .then(mod => mod.ReactP5Wrapper as any), {
//     ssr: false
// }) as unknown as React.NamedExoticComponent<P5WrapperProps>
