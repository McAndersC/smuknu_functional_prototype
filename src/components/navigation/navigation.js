'use client'
import Link from "next/link";
import { useState } from "react";
import styles from './navigation.module.css';
import Image from "next/image";
import { FaBars } from 'react-icons/fa';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className={styles.navigationContainer}>
      
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <Image src="/smuknu_logo.png"
                    alt={'SmukNu'}
                    width={4989}
                    height={1349}
                    className={styles.logoImg}></Image>
            </div>
            <div className={styles.actions} onClick={() => setIsOpen(!isOpen)}>
                <FaBars className={styles.bars}></FaBars>
            </div>
        </div>
        <div className={`${styles.navigationPane} ${!isOpen ? styles.navigationBar : styles.navigationBarOpen}`}>

            <Link href="/" onClick={() => setIsOpen(false)}>FORSIDEN</Link> 
            <Link href="/produkter" onClick={() => setIsOpen(false)}>PRODUKTER</Link> 
            <Link href="/bliv-medlem" onClick={() => setIsOpen(false)}>Bliv Medlem </Link>
            <Link href="/dev" onClick={() => setIsOpen(false)}>Developer</Link>
            <Link href="/layout" onClick={() => setIsOpen(false)}>Layout</Link> 

        </div>
   
    </div>
}

export default Navigation;