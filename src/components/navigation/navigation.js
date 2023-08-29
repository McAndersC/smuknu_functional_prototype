'use client'
import Link from "next/link";
import { useState } from "react";
import styles from './navigation.module.css';
import Image from "next/image";
import { FaBars, FaShoppingBag } from 'react-icons/fa';

const Basket = () => {

    return <div className={styles.basket}>BASKET</div>

}

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);

    return <div className={styles.navigationContainer}>
      
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <Image src="/smuknu_logo.png"
                    alt={'SmukNu'}
                    width={4989}
                    height={1349}
                    className={styles.logoImg}></Image>
            </div>
            <div className={styles.actions}>
                
                <div onClick={() => setIsBasketOpen(!isBasketOpen)}>
                    <FaShoppingBag className={styles.bars}></FaShoppingBag>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <FaBars className={styles.bag}></FaBars>
                </div>
            </div>
       
        </div>
        <div className={`${styles.navigationPane} ${!isOpen ? styles.navigationBar : styles.navigationBarOpen}`}>

            <Link href="/" onClick={() => setIsOpen(false)}>FORSIDEN</Link> 
            <Link href="/produkter" onClick={() => setIsOpen(false)}>PRODUKTER</Link> 
            <Link href="/bliv-medlem" onClick={() => setIsOpen(false)}>Bliv Medlem </Link>
            <Link href="/dev" onClick={() => setIsOpen(false)}>Developer</Link>
            <Link href="/layout" onClick={() => setIsOpen(false)}>Layout</Link> 

        </div>
        <div className={`${styles.basketPane} ${!isBasketOpen ? styles.basketPaneClosed : styles.basketPaneOpen}`}>

            <Basket></Basket>

        </div>
   
    </div>
}

export default Navigation;