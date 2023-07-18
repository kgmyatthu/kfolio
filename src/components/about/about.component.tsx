
import React, { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { SECTION } from '../../App';


function About({setSection}: any) {

    const containerRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;
      function scrollHandler(e: WheelEvent){
            if(e.deltaY < -15){
              setSection(SECTION.head);
            }
      }
      useEffect(()=>{

        containerRef.current.addEventListener('wheel', scrollHandler)
          return () => {
          }
      },[])
  return (
    <>
        <div className={styles.container} ref={containerRef}>
            <div className={styles.me}>
                <img src="https://avatars.githubusercontent.com/u/24825299?v=4"></img>
            </div>
            <div className={styles.description}> 
                I’m Kaung Myatthu or just Matthew as my international friends like to call it. I'm a software engineer based in Bangkok, Thailand. I build things for computers with computers. <br/>I work with golang, 
                c/c++, nodejs, python or anything required to get the job done.
    <br/>
                Currently working as blockchain protocol developer with shardus team to build shardeum network. 
            </div>
            <div className={styles.email}>
                kaung@shardus.com 
            </div>
            <div className={styles.social}>
                <FaGithubSquare size={25}/>
                <FaLinkedin size={25}/>
                <FaTwitterSquare size={25}/>
            </div>
        </div>
    </>
  );
}

export default About;
