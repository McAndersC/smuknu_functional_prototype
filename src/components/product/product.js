import Image from "next/image";
import styles from "./product.module.css";
const Product = ({productData}) => {

    return (
      <div className={styles.product}>
        <Image src={productData.image} alt={productData.name} width={200} height={200} />
        <h4>Title: {productData.title}</h4>
        <h5>Price: {productData.price} ,-</h5>
        {productData.discountInPercent !== 0 ? 'Rabat' : 'Ingen Rabat'}
      </div>
    )
  
}

export default Product;