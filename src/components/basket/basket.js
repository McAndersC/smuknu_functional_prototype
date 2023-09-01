'use client'
import BasketList from './basketList';
import styles from './basket.module.css';

import { useState, useEffect } from 'react';
import { useBasketContext } from '@/context/basket';
import { getBasket } from '@/services/basketservice';

const Basket = () => {

    const [basket, setBasket] = useState([]);
    const {basketContext, setBasketContext} = useBasketContext();

    const getProducts = async (basket) => {
        
        return fetch(`https://smuknu.webmcdm.dk/products`).then(res => res.json());
            
    }

    useEffect(() => {
        
        getBasket().then( (basket) => {
            setBasketContext(basket);
        }); 
      
    }, [setBasketContext]);

    useEffect(() => {
        
        const getBasketData = async () => {

            const products = await getProducts(); 
            const basketLocal = await getBasket(); 
    
            let basketData = [];
         
            basketLocal?.forEach((item) => {
    
                let product = products.find((p) => p._id === item.id);
                product.quantity = item.quantity;
                basketData.push(product);
    
            });
    
            setBasket(basketData);
     
        }

        getBasketData();
       

    }, [basketContext]);

    return  <>

        {basket.length !== 0 ? <BasketList basket={basket}></BasketList> : <div className={styles.empty}>Der er ingen varer i kurven</div>} 

    </> 

}

export default Basket;