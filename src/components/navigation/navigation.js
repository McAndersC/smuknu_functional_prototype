'use client'
import Link from "next/link";
import { useState } from "react";
import styles from './navigation.module.css';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <div>
      
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        <div className={`${!isOpen ? styles.navigationBar : styles.navigationBarOpen}`}>

            <Link href="/">Home</Link> | <Link href="/dev">Developer</Link> | <Link href="/layout">Layout</Link>

        </div>
        
    </div>
}

export default Navigation;