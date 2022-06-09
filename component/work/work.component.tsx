import type { NextPage } from "next";
import { useState } from "react";
import Image from 'next/image';
import { classNameHelper as css, imgLoader } from "../../utils/utils";
import Timeline from "../timeline/timeline.component";
import styles from './work.module.css';
import gif from '../../assets/img/toroto.gif'

const Work: NextPage = () => {
  const [jobs, setJobs] = useState([
    {
      year: 2022,
      month: 'Feb',
      position: "software engineer",
      company: "shardus",
      link: "https://shardus.com/#team",
      description: "Dynamically state shard-ed blockchain protocol allowing true linear scalability for decentralized web"
    },
    {
      year: 2022,
      month: 'Feb',
      position: "software engineer",
      company: "shardeum",
      link: 'https://shardeum.org',
      description: "EVM-based, linearly scalable smart contract platform that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding"
    },
    {
      year: 2021,
      month: 'Feb',
      position: "Full stack web developer",
      link: '/#',
      company: "LUUPIT",
      description: "Help business succeed using technology"
    },

  ])
  return (
    <div className={styles['container']}>
      <div className={css(styles, 'child col-1st')}>
        <h1>
          <span style={{color:'#8c52ff'}}>
            EXP
          </span>
            ERIENCE
        </h1>
        <Timeline className={styles.timeline} data={jobs}/>
      </div>
      <div className={css(styles,'child col-2nd')}>
          <h1>"起死回生"</h1>
          <Image 
            loader={imgLoader} 
            src={gif} 
            alt="profile" 
            className={styles.gif}
            />
      </div>
    </div>
  )
}

export default Work

