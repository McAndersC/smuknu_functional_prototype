import { quickFont } from '@/utils/fonts';
import styles from './page.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Layout() {

    return <div>
        
        <h1 className={`${quickFont.className} ${styles.headline} ${styles.white}`}>MEDLEM?</h1>
        <div>Standard Font</div>
        <FaFacebook className={styles.icon}/>
        <FaInstagram className={styles.icon} />
        
    </div>

}