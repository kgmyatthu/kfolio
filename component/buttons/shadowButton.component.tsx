import type { NextPage } from "next";
import styles from './buttons.module.css';
import { classNameHelper as css } from "../../utils/utils";
import { useEffect, useRef } from "react";
import React from "react";

type ShadowButtonType = {
  content: string
  action: string | Function
  className?: string
  shadowColor?: string
}
const ShadowButton: NextPage<ShadowButtonType> = ({content, action, className}) => {
	
  const el = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(()=>{
    if(el){
      el.current.innerHTML = content.replace(" ","&nbsp;")
    }
  },[])

  // {content.replace(" ", "&nbsp;")}
  return (
    <div 
      onClick={(e)=>{
	if(typeof action === 'string'){
	  window.location.href = action
	}
	if(typeof action === 'function'){
	  action(e) 
	}
      }}
      ref={el}
      className={`${css(styles, "shadow-btn")} ${className? className: ''}`}>
    </div>
  )
}

export default ShadowButton
