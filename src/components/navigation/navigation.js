'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from './navigation.module.css';
import Image from "next/image";
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { useBasketContext } from '@/context/basket';
import BasketCounter from "./basket/basketCounter";
import BasketPane from "./basket/basketPane";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const {basketContext, setBasketContext} = useBasketContext();
 
    return <div className={styles.navigationContainer}>
      
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <Link href="/"><Image src="/smuknu_logo.png"
                    alt={'SmukNu'}
                    width={4989}
                    height={1349}
                    className={styles.logoImg}></Image></Link>
            </div>
            <div className={styles.actions}>
                
                <div onClick={() => { setIsBasketOpen(!isBasketOpen); setIsOpen(false)} }>
                    <BasketCounter></BasketCounter>
                    <FaShoppingBag className={`${styles.bag} ${basketContext && basketContext?.length !== 0 ? styles.active : ''} `} ></FaShoppingBag>
                </div>
                <div onClick={() => {setIsOpen(!isOpen); setIsBasketOpen(false)}}>
                    <FaBars className={`${styles.bars}`}></FaBars>
                </div>
            </div>
        </div>

        <div className={`${styles.navigationPane} ${!isOpen ? styles.navigationBar : styles.navigationBarOpen}`} onClick={() => {setIsOpen(false)}}>

            <Link href="/">FORSIDEN</Link> 
            <Link href="/produkter">VORES PRODUKTER</Link> 
            <Link href="/spoerg-om-sundhed">SRØRG OM SUNDHED</Link>
            <Link href="/bliv-medlem">BLIV MEDLEM</Link>
            <Link href="/dev">Developer</Link>
            <Link href="/layout">Layout</Link> 

        </div>
        <div className={`${styles.basketPane} ${!isBasketOpen ? styles.basketPaneClosed : styles.basketPaneOpen}`}>
            <BasketPane></BasketPane>
        </div> 
   
    </div>
}

export default Navigation;