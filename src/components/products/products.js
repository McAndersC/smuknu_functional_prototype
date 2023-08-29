'use client'
import { useBasketContext } from '@/context/basket';
import Product from '../product/product';
import { addToBasket, removeFromBasket, getBasket } from '../services/basketservice';
import styles from './products.module.css';
import { useState, useEffect } from "react";
import Header from '../common/header';

// const ProductHeader = ({text}) => {

//     return <div className={styles.productsHeader}>
//         <h2>{text.black}<br/><span className={styles.productsHeaderSub}>{text.pink}</span></h2>
//     </div>

// }


const Products = ({headline, recommend}) => {

    const [productData, setProductData] = useState([]);
    const [recommended, setRecommeded] = useState(recommend);
    const { basketActive, setBasketActive} = useBasketContext();

    const addProductToBasket = (id) => {

        console.log('KØB', id)
        addToBasket(id).then( (products) => {
    
            products = JSON.parse(products);
            products.length !== 0 ? setBasketActive(true) : setBasketActive(false);

        })
    
    }
    
    const removeProductToBasket = (id) => {
    
        removeFromBasket(id).then( (products) => {
    
            products.length !== 0 ? setBasketActive(true) :  setBasketActive(false);

        })
    
    }

    const checkBasket = async () => {
            
        let basket = await getBasket();

        if(basket !== null) {
            setBasketActive(true);
        } else {
            setBasketActive(false);
        }
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
        // checkBasket();
    
    }, []);

    return <div className={styles.products}>
     
        <Header text={headline}></Header>
        {/* <h1>{basketActive.toString()} {recommended.toString()}</h1> */}
    
        <div className={styles.productsList}>
            { recommended ? showRecommendedProducts() : showAllProducts() }
        </div>

    </div>
}

export default Products;