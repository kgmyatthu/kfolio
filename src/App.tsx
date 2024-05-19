import React, { useEffect, useState } from 'react';
import './assets/main.css';
import './assets/transitions.css';
import About from './components/about/about.component';
import Head from './components/head/head.component';
import Nav from './components/nav/nav.component';
import Work from './components/work/work.component';
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

const experiences = [
  {
    name: "Shardeum",
    position: "Software Engineer",
    yearStart: 2022,
    description: "Horizontally scalable, low gas fees, EVM compatible, and decentralized layer 1 chain",
    link: "https://shardeum.org",
  },
  {
    name: "Shardus",
    position: "Software Engineer",
    yearStart: 2022,
    description: "A compute and dynamically state sharded decentralized computer network protocol technology",
    link: "https://shardus.com",
  },
  {
    name: "LUUP IT Solution",
    position: "Consultant",
    yearStart: 2020,
    yearEnd: 2022,
    link: "http://luupitsoluction.com",
    description: "Helping businesses succeed using technology"
  }
]
const projects = [
  {
    name: "Hortus",
    yearStart: 2023,
    description: "Markdown to static site generator, primarily targeted for obsidian users as an open-sourced and free obsidian publish alternative",
    link: "#"
  }
]
export enum SECTION{
  head = "HEAD",
  about = "ABOUT",
}
function App() {
  const [showWork, setShowWork] = useState(false);
  const [activeSection, setActiveSection] = useState<SECTION>(SECTION.head);
  // const [showHead, setShowHead] = useState<Boolean>(activeSection === SECTION.head);
  // const [showAbout, setShowAbout] = useState<Boolean>(activeSection === SECTION.about);
  // useEffect(()=>{
  //   setShowHead((activeSection === SECTION.head));
  //   setShowAbout((activeSection === SECTION.about));
  // },[showHead, showAbout])
  return (
    <>
      <Nav setShowWork={setShowWork} setSection={setActiveSection} section={activeSection}>
      <SwitchTransition>
        <CSSTransition 
          key={(activeSection===SECTION.head) ? SECTION.head : SECTION.about} 
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames="headTransition">
          { (activeSection===SECTION.head) ?
            <Head setSection={setActiveSection}/>
            :
            <About setSection={setActiveSection}/>
          }
        </CSSTransition>
      </SwitchTransition>
        <CSSTransition 
          in={showWork}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames="workTransition">

           <Work 
              controller={setShowWork} 
              exps={experiences} 
              projs={projects}/>
        </CSSTransition>
      </Nav>
    </>
  );
}

export default App;


