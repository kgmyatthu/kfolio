import type { NextPage } from "next";
import { useState } from "react";
import { classNameHelper as css } from "../../utils/utils";
import Timeline from "../timeline/timeline.component";
import styles from './work.module.css';

const Work: NextPage = () => {
  const [jobs, setJobs] = useState([
    {
      year: 2022,
      month: 'Feb',
      position: "software engineer",
      company: "shardus",
      description: "Dynamically state shard-ed blockchain protocol allowing true linear scalability for decentralized web"
    },
    {
      year: 2022,
      month: 'Mar',
      position: "software engineer",
      company: "shardeum",
      description: "EVM-based, linearly scalable smart contract platform that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding"
    },
    {
      year: 2021,
      month: 'Feb',
      position: "Full stack web developer",
      company: "shardeum",
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
      <div className={styles['child']}></div>
    </div>
  )
}

export default Work

