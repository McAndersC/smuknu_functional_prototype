import Image from 'next/image';
import styles from './product.module.css';
import productsStyles from '../products/products.module.css';
import { FaCartPlus, FaMinus } from 'react-icons/fa';
const PercentBox = ({ percent }) => {

  return percent ? <div className={styles.discount}>
    <div className={styles.discountText}>SPAR</div>
    <div className={styles.discountPercent}>{percent}%</div>
  </div> : ''

}


const Product = ({product, addToBasket, removeFromBasket}) => {

    return (
      <div className={`${styles.product} `}>
     
        <div className={styles.header}>

          <PercentBox percent={product.discountInPercent ? product.discountInPercent : 0}></PercentBox>
          <Image src={product?.image} alt={product?.title} width={300} height={300}/>

        </div>
    
        <div className={styles.body}>
          
          <div>
              <div className={styles.title}>{product.title}</div>
          </div>

          <div className={styles.footer}>

            <div>

              <div className={styles.price}>{product.price},00 kr.</div>

            </div>

            <div>

              <button className={styles.btn} onClick={() => addToBasket(product?._id)}><FaCartPlus></FaCartPlus></button>
              <button className={styles.btn} onClick={() => removeFromBasket(product._id)}><FaMinus></FaMinus></button>
              
            </div>

          </div>

        </div>
      </div>
    )
  
}

export default Product;

