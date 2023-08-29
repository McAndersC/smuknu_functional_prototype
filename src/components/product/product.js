import Image from "next/image";
import styles from "./product.module.css";

const PercentBox = ({ percent }) => {

  return percent ? <div className={styles.productDiscount}>
    <div className={styles.productDiscountText}>SPAR</div>
    <div className={styles.productDiscountPercent}>{percent}%</div>
  </div> : ''

}


const Product = ({product, addToBasket, removeFromBasket}) => {

    return (
      <div className={styles.product}>
     
          <div className={styles.imageContainer}>
            {/* <PercentBox percent={product.discountInPercent ? product.discountInPercent : 0}></PercentBox> */}
            <Image src={product?.image} alt={product?.title} width={200} height={200}/>
          </div>
    
        <div className={styles.productDescription}>


          <button onClick={() => addToBasket(product?._id)}>KØB</button> |


          
          <button onClick={() => removeFromBasket(product._id)}>REMOVE</button>


          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.productPrice}>{product.price},00 kr.</div>
        </div>
      </div>
    )
  
}

export default Product;