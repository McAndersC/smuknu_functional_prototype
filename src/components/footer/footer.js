import styles from './footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {

    return <div className={styles.footer}>
         
         <div>   

            <div className={styles.social}>
                <a href="/#"><FaFacebook className={styles.icon} /></a>
                <a href="/#"><FaInstagram className={styles.icon} /></a>
                <a href="/#"><FaInstagram className={styles.icon} /></a>
                <a href="/#"><FaInstagram className={styles.icon} /></a>
                <a href="/#"><FaInstagram className={styles.icon} /></a>
            </div>     

            <div className={styles.address}>

                <a href="mailto:">mail@smuknu.nu</a>
                <a href="mailto:">+45 123 345 33</a>

            </div>
            
        </div>


    </div>
}

export default Footer;