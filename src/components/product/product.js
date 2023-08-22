import Image from "next/image";
const Product = ({productData}) => {

    return (
      <div>
        <Image src={productData.image} alt={productData.name} width={200} height={200} />
        <h4>Title: {productData.title}</h4>
        <h5>Price: {productData.price} ,-</h5>
      </div>
    )
  
}

export default Product;