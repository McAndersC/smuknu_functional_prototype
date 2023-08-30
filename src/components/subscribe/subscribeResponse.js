import Image from 'next/image';
import styles from './subscriberformular.module.css';
import Link from 'next/link';

const SubscribeResponseView = ({name}) => {
    return (
        <div className={styles['responseView'] }>
            <div>
                <h1 className={styles.headline}>TAK!</h1>
                <div className={styles.name}>{name}</div>
                <p>Vi er enormt glade for at få dig som medlem.</p>
                <Image className={styles.image} src={'/products/product_1213213211.jpg'} width={150} height={150} alt={'Winner'}></Image>
                <p>Kig I din inbox vi har sendt en lille velkomst gave.</p>
                
                <Link href="/" className={styles.btn}>Til Forsiden.</Link>

            </div>
        </div>
    )
}

export default SubscribeResponseView;