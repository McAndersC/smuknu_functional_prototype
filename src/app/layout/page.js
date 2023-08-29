import { quickFont } from '@/utils/fonts';
import styles from './page.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import SubscribeForm from '@/components/subscribe/subscribeformular';
import Product from '@/components/product/product';

let productData = {
    "_id": "6418576e26d8eda8bbe16729",
    "title": "All purpose balm ",
    "image": "https://smuknu.webmcdm.dk/products/6418576e26d8eda8bbe16729.jpg",
    "price": 169,
    "discountInPercent": 20,
    "recommended": true,
    "created": "2023-03-20T12:53:45.763Z",
    "__v": 0
  }


export default function Layout() {

    return <div>
    
        <h1 className={`${quickFont.className} ${styles.headline}`}>MEDLEM?</h1>
        <div>Standard Font</div>

        <FaFacebook className={styles.icon} />
        <FaInstagram className={styles.icon} />
        

        <SubscribeForm></SubscribeForm>

        <hr></hr>

        
    </div>

}