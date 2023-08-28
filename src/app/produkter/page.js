import Products from "@/components/products/products"
import styles from './page.module.css'

const ProductsPage = () => {

    return <div className={styles.main}>
        
        <Products config={{black: 'RECOMEND', pink:'PRODUCTS', recommended: true}}></Products>
        <Products config={{black: 'ALL', pink:'PRODUCTS', recommended: false}}></Products>


    </div>

}

export default ProductsPage