import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { imgLoader } from '../../utils/utils'
import logo from '../../assets/img/logo.png'
import styles from './nav.module.css'
import Link from 'next/link'

const Nav: NextPage<any> = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.children}>
            {children}
        </div>
        <div className={styles.nav}>
            <div className={styles.logo}>
              <Image 
                unoptimized={true}
                loader={imgLoader} 
                src={logo} 
                alt="profile" 
                layout="responsive" 
                className={styles['pp-img']}/>
            </div>
            <div className={styles.link}><Link href="/#work">WORK</Link> </div>
            <div className={styles.link}><Link href="/#about">ABOUT</Link> </div>
            <div className={styles.link}><Link href="/article">ARTICLES</Link> </div>
        </div>
    </div>
  )
}

export default Nav
