
import type { NextPage } from "next";
import { classNameHelper as css } from "../../utils/utils";
import Timeline from "../timeline/timeline.component";
import styles from './work.module.css';

const Work: NextPage = () => {
  return (
    <div className={styles['container']}>
      <div className={css(styles, 'child col-1st')}>
        <h1>
          <span style={{color:'#8c52ff'}}>
            EXP
          </span>
            ERIENCE
        </h1>
        <Timeline className={styles.timeline}/>
      </div>
      <div className={styles['child']}></div>
    </div>
  )
}

export default Work
