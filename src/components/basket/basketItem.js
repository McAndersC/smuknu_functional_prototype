import Image from 'next/image';
import styles from './basket.module.css';

const BasketItem = ({item}) => {

    return <div className={styles.item}>

        <div>
            <Image className={styles.image} src={item.image} width={100} height={100} alt={item.title}></Image>
        </div>

        <div className={styles.description}>

           <div className={styles.title}>{item.title}</div>
           <div className={styles.price}>{item.quantity} x {item.price} = {item.quantity * item.price} kr.</div>
           
        </div>

    </div>

}

export default BasketItem;