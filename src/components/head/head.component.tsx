import React, { useEffect, useRef, useState } from 'react';
import styles from './head.module.css';
import * as THREE from 'three';
//@ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';
import  { BsFillMouseFill } from 'react-icons/bs';
import { SECTION } from '../../App';

function Head({setSection}: any) {
    const squareRef = useRef() as unknown as React.MutableRefObject<HTMLInputElement>;
    const maskRef = useRef() as unknown as React.MutableRefObject<HTMLInputElement>;
    const nameRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;
    const occupationRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;
    const quoteRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;
    const containerRef = useRef() as unknown as React.MutableRefObject<HTMLDivElement>;
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const [showSquare, setShowSquare] = useState<boolean>(false)

      function  mouseMoveHandler(e: MouseEvent){
            try{

              const mouse = { x: 0, y: 0 }
              mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
              mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

              if(window.innerWidth > 560) {

                nameRef.current.style.marginLeft = -1 * mouse.x * 1 + 'rem';
                // nameRef.current.style.marginTop = mouse.y + 'rem';

                quoteRef.current.style.marginLeft = -1 * mouse.x * 1.5 + 'rem';
                // quoteRef.current.style.marginTop = mouse.y + 'rem';

                occupationRef.current.style.marginLeft = -1 * mouse.x * 0.8  + 'rem';
              }


              squareRef.current.style.marginLeft = -1 * mouse.x * .7 + 'rem';
              squareRef.current.style.marginTop = mouse.y * .7 + 'rem';

              maskRef.current.style.marginLeft = -1 * mouse.x * .7 + 'rem';
              maskRef.current.style.marginTop = mouse.y * .7 + 'rem';
            }catch(e: any){
              console.log("mouseMoveHandler: FAIL", e);
            }
      }

      function scrollHandler(e: WheelEvent){
            if(e.deltaY > 15){
              setSection(SECTION.about);
            }
      }

          const drawCanvas = () => {
            // if(!window.THREE){
            //   window.THREE = THREE
            // }
            try{
              if(vantaEffect)return

              setVantaEffect(
                FOG({
                  el: squareRef.current,
                  THREE: THREE,
                  mouseControls:false ,
                  touchControls:false ,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  blurFactor: 0.4,
                  speed: 1, 
                  zoom: 2,
                  // highlightColor: 0x1ac5ed,
                  // midtoneColor: 0x8e1301,
                  // baseColor: 0x14065f
                })
              );
              // squareRef.current.removeChild(squareRef.current.lastElementChild as any);
              // setVantaEffect(TOPOLOGY({
              //     el: squareRef.current,
              //     mouseControls: false,
              //     touchControls: false,
              //     gyroControls: false,
              //     minHeight: 50.00,
              //     minWidth: 50.00,
              //     scale: 0.50,
              //     scaleMobile: 0.50,
              //     color: 0x0,
              //     backgroundColor: 0x16ca
              //   }))
            }catch(e: any){
              console.error("Couldn't draw");
              console.error(e);
            }
          }

  useEffect(()=>{
          const squareTimeout = setTimeout(()=>{setShowSquare(true)}, 200); 
    containerRef.current.addEventListener('mousemove', mouseMoveHandler)
    containerRef.current.addEventListener('wheel', scrollHandler)
      return () => {
        clearTimeout(squareTimeout);
        if (vantaEffect) vantaEffect.destroy()
      }
  },[])

  useEffect(()=>{
    if(showSquare){
      drawCanvas();
    }
  },[showSquare])

  return (
    <>
      <div className={styles.container} ref={containerRef}>
          <div className={styles.occupation} ref={occupationRef}>
              <span>Software&nbsp;Engineer</span>
          </div>
          <br/>
          <div className={styles.name} ref={nameRef}>KAUNG MYATTHU</div>
          <br/>
          <div className={styles.quote} >
              <span ref={quoteRef}>
                  "Make it work, Make it right, Make it fast, have fun."
              </span>
          </div>
          { showSquare && <div className={styles.square} ref={squareRef}></div>}
          { showSquare && <div className={styles.squareMask} ref={maskRef}></div>}
          <div className={styles.mouse}>
            <BsFillMouseFill size={25} />
            DOWN
          </div>
      </div>
    </>
  );
}

export default Head;

