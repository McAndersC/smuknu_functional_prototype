'use client'
import { useBasketContext } from '@/context/basket';
import Product from '../product/product';
import { addToBasket, removeFromBasket } from '../services/basketservice';
import styles from './products.module.css';
import { useState, useEffect } from "react";
import Header from '../common/header';


const Products = ({headline, recommend}) => {

    const [productData, setProductData] = useState([]);
    const [recommended, setRecommeded] = useState(recommend);
    const { basketActive, setBasketContext} = useBasketContext();

    const addProductToBasket = async (id) => {

        console.log('KØB', id);

        addToBasket(id).then( (products) => {
    
            products = JSON.parse(products);
            products.length !== 0 ? setBasketContext(products) : setBasketContext(products);

        })
    
    }
    
    const removeProductToBasket = (id) => {
    
        removeFromBasket(id).then( (products) => {
    
            products.length !== 0 ? setBasketContext(products) : setBasketContext(products);

        })
    
    }


    const getProducts = async () => {
        
        fetch(`https://smuknu.webmcdm.dk/products`).then(res => res.json()).then(data => setProductData(data));
            
    }

    const showAllProducts = () => {

        return productData.length !== 0 ? productData.map((product, index) => <Product 
            key={index} 
            product={product} 
            addToBasket={addProductToBasket} 
            removeFromBasket={removeProductToBasket}>
        </Product>) : null;

    }

    const showRecommendedProducts = () => {
        return productData.length !== 0 ? productData.filter((p) => p.recommended).map((product, index) => <Product 
        key={index} 
        product={product} 
        addToBasket={addProductToBasket} 
        removeFromBasket={removeProductToBasket}>
        </Product>) : null;
    }

    useEffect(() => {

        getProducts();
    
    }, []);

    return <div className={styles.products}>
     
        <Header text={headline}></Header>

        <div className={styles.productsList}>
            { recommended ? showRecommendedProducts() : showAllProducts() }
        </div>

    </div>
}

export default Products;