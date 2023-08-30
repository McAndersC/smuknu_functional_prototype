'use client'
import Basket from "./basket";
import styles from "./basket.module.css";

import { useState, useEffect } from "react";
import { useBasketContext } from '@/context/basket';
import { getBasket } from "@/components/services/basketservice";

const BasketPane = () => {

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

        {basket.length !== 0 ? <Basket basket={basket}></Basket> : <div className={styles.empty}>Der er ingen varer i kurven</div>} 

    </> 

}

export default BasketPane;