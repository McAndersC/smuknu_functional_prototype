import styles from './basket.module.css';
import { useBasketContext } from '@/context/basket';

const BasketCounter = () => {
    
    const {basketContext, setBasketContext} = useBasketContext();
    console.log(basketContext);
    
    return basketContext?.length > 0 ? <div className={styles.basketCounter}>{basketContext?.length}</div> : '';

}

export default BasketCounter;