'use client'
import Product from '../product/product';
import styles from './products.module.css';
import { useState, useEffect } from "react";

let mockProductData = {
    "_id": "6418576e26d8eda8bbe16729",
    "title": "All purpose balm ",
    "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
    "price": 169,
    "discountInPercent": 20,
    "recommended": true,
    "created": "2023-03-20T12:53:45.763Z",
    "__v": 0
  }

const ProductHeader = ({text}) => {

    return <div className={styles.productsHeader}>
        <h2>{text.black}<br/><span className={styles.productsHeaderSub}>{text.pink}</span></h2>
    </div>

}

const Products = ({config}) => {

    const [productData, setProductData] = useState([]);
    const [recommended, setRecommeded] = useState(config?.recommended);

    const getProducts = async () => {
        
        fetch(`https://smuknu.webmcdm.dk/products`).then(res => res.json()).then(data => setProductData(data));
            
    }

    const showAllProducts = () => {
        return productData.length !== 0 ? productData.map((product, index) => <Product key={index} product={product}></Product>) : null
    }

    const showRecommendedProducts = () => {
        return productData.length !== 0 ? productData.filter((p) => p.recommended).map((product, index) => <Product key={index} product={product}></Product>) : null
    }

    useEffect(() => {

        getProducts();
    
    }, []);

    return <div className={styles.products}>
     
            <ProductHeader text={config}></ProductHeader>

            <div className={styles.productsList}>
                { recommended ? showRecommendedProducts() : showAllProducts() }
                {/* {productData.length !== 0 ? productData.map((product, index) => <Product key={index} product={product}></Product>) : null} */}
                {/* {productData.length !== 0 ? productData.filter((p) => p.recommended).map((product, index) => <Product key={index} product={product}></Product>) : null} */}
            </div>
     


    </div>
}

export default Products;