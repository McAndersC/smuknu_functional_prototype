'use client'
import styles from './navigation.module.css';

import Link from 'next/link';
import { useBasketContext } from '@/context/basket';
import { FaBars, FaShoppingBag } from 'react-icons/fa';

import { useState } from 'react';
import Image from 'next/image';
import BasketCounter from '../basket/basketCounter';
import Basket from '../basket/basket';

/* 


    Navigation component


*/
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const {basketContext, setBasketContext} = useBasketContext();
 
    return <div className={styles.navigation}>
        
        {/* 
        
            BAR 
        
        */}
        
        <div className={styles.bar}>

            <div className={styles.logo}>
                <Link href="/"><Image src="/smuknu_logo.png"
                    alt={'SmukNu'}
                    width={4989}
                    height={1349}
                    className={styles.image}></Image></Link>
            </div>

            <div className={styles.actions}>
                
                <div onClick={() => { setIsBasketOpen(!isBasketOpen); setIsOpen(false)} }>

                    <BasketCounter></BasketCounter>
                    <FaShoppingBag className={`${styles.bag} ${basketContext && basketContext?.length !== 0 ? styles.active : ''} `}></FaShoppingBag>

                </div>

                <div onClick={() => {setIsOpen(!isOpen); setIsBasketOpen(false)}}>

                    <FaBars className={`${styles.bars}`}></FaBars>

                </div>
            </div>
        </div>

        {/* 
        
            Navigation Dropdown
        
        */}

        <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`} onClick={() => {setIsOpen(false)}}>

            <Link href="/">FORSIDEN</Link> 
            <Link href="/produkter">VORES PRODUKTER</Link> 
            <Link href="/spoerg-om-sundhed">SRØRG OM SUNDHED</Link>
            <Link href="/bliv-medlem">BLIV MEDLEM</Link>

        </div>

        {/* 
        
            Basket Dropdown
        
        */}
        <div className={`${styles.basketDropdown} ${isBasketOpen ? styles.open : ''}`} onClick={() => {setIsBasketOpen(false)}}>
            <Basket></Basket>
            {/* {basketContext?.length > 0 ? <Link href="/ordre" className={styles.checkout}>Til Bestillings Side</Link> : '' } */}
        </div> 
   
    </div>
}

export default Navigation;