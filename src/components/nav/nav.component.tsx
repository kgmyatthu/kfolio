import React, { ReactChildren, useEffect, useRef, useState } from 'react';
import { SECTION } from '../../App';
import styles from './nav.module.css';

function Nav({children, setShowWork, setSection, section}: any) {
    const homeRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;
    const aboutRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
       if(section === SECTION.head) {
            homeRef.current.style.textDecoration = "line-through"; 
            aboutRef.current.style.textDecoration = "none";
            console.log(section);
       }
       if(section === SECTION.about) {
            homeRef.current.style.textDecoration = "none"; 
            aboutRef.current.style.textDecoration = "line-through";
            console.log(section);
       }

    },[section])

  return (
    <div className={styles["container"]}>
        <div className={styles["nav"]}>
            <div className={styles["nav-flex"]}> 
                <a href="https://journals.kaungmyatthu.dev" >
                    JOURNALS
                </a> 
            </div>
            <div className={styles["nav-flex"]} onClick={()=>{setShowWork(true)}}> <a href="#" >WORK</a> </div>
            <div className={[styles["nav-flex"], styles.banner].join(" ")}> 
                <span>   KAUNG&nbsp;MYATTHU </span> 
            </div>
            <div className={styles["nav-flex"]} 
                onClick={()=> {setSection(SECTION.head)}}> 
                <span  ref={homeRef}>HOME</span> 
            </div>
            <div className={styles["nav-flex"]} 
                onClick={()=> {setSection(SECTION.about)}}> 
                <span  ref={aboutRef}>ABOUT</span> 
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>
  );
}

export default Nav;
