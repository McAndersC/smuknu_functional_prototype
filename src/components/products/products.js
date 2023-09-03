'use client'
import { useBasketContext } from '@/context/basket';
import Product from '../product/product';
import { addToBasket, removeFromBasket } from '../../services/basketservice';
import styles from './products.module.css';
import { useState, useEffect } from 'react';
import Header from '../common/header/header';
import { getAllProducts } from '../../services/dataservice';


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
        
        getAllProducts().then(data => setProductData(data));
            
    }

    const showAllProducts = () => {

        return productData.length !== 0 ? productData.map((product, index) => <div key={index} className={styles.product}><Product 
            key={index} 
            product={product} 
            addToBasket={addProductToBasket} 
            removeFromBasket={removeProductToBasket}>
        </Product></div>) : null;

    }

    const showRecommendedProducts = () => {
        return productData.length !== 0 ? productData.filter((p) => p.recommended).map((product, index) => <div key={index} className={styles.product}><Product 
            product={product} 
            addToBasket={addProductToBasket} 
            removeFromBasket={removeProductToBasket}>
        </Product></div>) : null;
    }

    useEffect(() => {

        getProducts();
    
    }, []);

    return <div className={styles.products} id="selected" >
     
        <Header text={{
            one : {
                text : 'UDVALGT',
                color : '#000'
            },
            two : {
                text : 'SKØNHED',
                color : '#fa96aa'
            }
        }}></Header>

        <div className={styles.list}>
            { recommended ? showRecommendedProducts() : showAllProducts() }
        </div>

    </div>
}

export default Products;