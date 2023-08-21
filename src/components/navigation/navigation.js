'use client'
import Link from "next/link";
import { useState } from "react";
import styles from './navigation.module.css';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className={styles.navigation}>
      
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        <div className={`${!isOpen ? styles.navigationBar : styles.navigationBarOpen}`}>

            <Link href="/">Home</Link> | <Link href="/dev">Developer</Link> | <Link href="/layout">Layout</Link> | <Link href="/layout">    </Link>

        </div>
        
    </div>
}

export default Navigation;