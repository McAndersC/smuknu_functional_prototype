import BasketItem from './basketItem';
import styles from './basket.module.css';
import Link from 'next/link';

const BasketList = ({basket}) => {

    const total = () => {
   
        return basket?.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    }

    return <div className={styles.basket}>
        
        {basket?.map((product) => <BasketItem key={product._id} item={product}></BasketItem>)}
        <hr></hr>
        <div className={styles.result}>fragt, moms, pis og papir 0 kr.</div>
        <div className={styles.result}>ialt: {total()} kr.</div>
       
    </div>
    

}

export default BasketList;