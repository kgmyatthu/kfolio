
import React from 'react';
import styles from './work.module.css';
import { TfiClose } from 'react-icons/tfi';

interface WorkProps {
    controller: React.Dispatch<React.SetStateAction<boolean>>
    exps: {
        name: string,
        position: string,
        yearStart: number,
        yearEnd?: number,
        description: string
        link: string
    }[]
    projs: {
        name: string,
        yearStart: number,
        description: string,
        link: string
    }[] 
}

function Work({controller, exps, projs}: WorkProps ) {
  return (
    <div className={styles.container}>
        <div className={styles.nav}>
            <div className={styles['nav-back']} onClick={()=>{controller(false)}}>
                <TfiClose/>
            </div>
        </div>
        <div className={styles.child}>
            <Experience exps={exps}/>
            <Project projs={projs}/>
        </div>
    </div>
  );
}

export default Work;


function Experience({exps}: {exps: WorkProps["exps"]}) {
    return (
        <div className={styles.exp}>
            <h1>EXPERIENCE</h1>
            { exps.map((t, index) => {
                return (
                    <a className={styles.job} href={t.link}>
                        <div className={styles['job-col1']}>#.{index+1}</div>
                        <div className={styles['job-col2']}>
                            <span>{t.name}</span>
                            <small>{t.yearStart} - {t.yearEnd ? t.yearEnd : "Present"} . {t.position}</small>
                            <p>{t.description}</p>
                        </div>
                    </a>
                )
            }) }
        </div>
    )
}

function Project({projs}: {projs: WorkProps["projs"]}) {
    return (
        <div className={styles.proj}>
            <h1>PROJECT</h1>
            {
                projs.map((t,index)=>{
                    return (
                        <a className={styles['proj-item']} href={t.link} key={index}>
                            <span>{t.name}</span>
                            <small>{t.yearStart}</small>
                            <p>
                                {
                                    t.description
                                }
                            </p>
                        </a>
                    )
                })
            }
        </div>
    )
}

