
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { classNameHelper as css } from "../../utils/utils";
import styles from './timeline.module.css';

type TimelineProps = {
  className?: string
  data: TimeframeProps[]
}
const Timeline: NextPage<TimelineProps> = ({className, data}) => {
  const lineEl = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [origin, setOrigin ] = useState<{x: number, y:number}>({x: 0, y: 0}) 
  const [target, setTarget ] = useState<{x: number, y:number}>({x: 0, y: 0})

  useEffect(()=>{
    const height = target.y - origin.y;
    lineEl.current.style.top = (origin.y + 10) + 'px'
    lineEl.current.style.left = (origin.x + 12) + 'px'
    lineEl.current.style.height = height + 'px'
  },[origin,target])
  return (
    <div className={className? className: ''}>
      <div className={styles.line} ref={lineEl}></div>
      {
        data.map((t,i,a) =>{
          if ( i === 0 ){
            return <Timeframe
              key={i}
              year={t.year}
              month={t.month}
              company={t.company}
              position={t.position}
              description={t.description}
              link={t.link}
              state={{get:origin, set:setOrigin}}
            />
          }
          if ( i === a.length - 1 ) {
            return <Timeframe
              key={i}
              year={t.year}
              month={t.month}
              company={t.company}
              position={t.position}
              description={t.description}
              link={t.link}
              state={{get:target, set:setTarget}}
            />
          }
          return <Timeframe
                    key={i}
                    year={t.year}
                    month={t.month}
                    company={t.company}
                    position={t.position}
                    link={t.link}
                    description={t.description}
                />
        } )
      }
    </div>
  )
}

type TimeframeProps = {
  year: number
  month: string
  company: string
  position: string
  description: string
  link: string
  state?: any
}
const Timeframe: NextPage<TimeframeProps> = ({year, month, company, position, description, state, link}) => {
  
  const dateEl = useRef() as React.MutableRefObject<HTMLInputElement>;
  const companyEl = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dotEl = useRef() as React.MutableRefObject<HTMLInputElement>;

  function getPos(element: typeof dateEl.current) {
    try{
      const pos = element.getBoundingClientRect();
      return {
        x: pos.x,
        y: pos.y
      };
    }catch(e){
      console.log(e)
    }
    // console.log(pos);
    return {
      x: 0,
      y: 0
    }
  }
  useEffect(()=>{
    let animationFrame: number;
    const draw = () => {
      animationFrame = requestAnimationFrame(draw);     
      const j = getPos(dateEl.current)
      const k = getPos(companyEl.current)
  
      const left = (k.x + j.x + 10)/2;
      const top = k.y + 10;
      state?.set({
        x: left,
        y: top
      })
      dotEl.current.style.left = `${left}px`;
      dotEl.current.style.top = `${top}px`;
      // console.log(left)
    }
  
    animationFrame = requestAnimationFrame(draw); 

    return (()=>{
      // if we don't cancel animation loop on component dismount, the whole site could break
      cancelAnimationFrame(animationFrame);
    })
  },[])

  return (
    <a className={styles['timeframe']} href={link}>
      <div className={styles['timeframe-date']}>
        <span ref={dateEl}>{year}</span> 
        <br/>
        <span>{month}</span>
      </div>
      <div className={styles['timeframe-data']}>
        <h2 ref={companyEl}>{company}</h2>
        <div>{position}</div>
        <p>
          {description}
        </p>
      </div>
      <div ref={dotEl} className={styles.dot}></div>
    </a>
  )
}
export default Timeline
