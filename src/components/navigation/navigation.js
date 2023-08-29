'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from './navigation.module.css';
import Image from "next/image";
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import { useBasketContext } from '@/context/basket';
import { getBasket } from '../services/basketservice';

const Basket = ({basket, products}) => {

    const getProductDataForId = (id) => {
   
        return products.find((p) => p._id === id);

    }

    return <div className={styles.basket}>
        
        {basket?.map( (product) => {
  
            const productData = getProductDataForId(product.id)

            if(productData) {

                return <div key={productData._id}>{productData.image} {productData.image}</div>
            }

        } )}

    </div>

}

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const { basketContext, setBasketContext } = useBasketContext();
    const [ navBasket, setNavBasket] = useState([]);
    const [productData, setProductData] = useState([]);

    const getProducts = async () => {
        
        fetch(`https://smuknu.webmcdm.dk/products`).then(res => res.json()).then(data => setProductData(data));
            
    }

    useEffect(() => {

        getProducts();

        getBasket().then((basket) => {
            if(basket && basket.length !== 0) {
                setBasketContext(basket);
                setNavBasket(basket);
            } else {
                setBasketContext(basket);
            }
        });

       

    }, [setBasketContext]);

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
                    {basketContext?.length !== 0 ? <div>{basketContext.length}</div> : null}
                    <FaShoppingBag className={`${styles.bag} ${basketContext ? styles.active : ''} `} ></FaShoppingBag>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <FaBars className={`${styles.bars}`}></FaBars>
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

            <Basket basket={basketContext} products={productData}></Basket>

        </div>
   
    </div>
}

export default Navigation;