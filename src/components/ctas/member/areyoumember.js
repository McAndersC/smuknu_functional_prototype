import Image from 'next/image';
import styles from './areyoumember.module.css'
import Link from 'next/link';

const AreYouMember = () => {

    return <div className={styles.member}>
        
        <div className={styles.teaser}>

            <h2 className={styles.headline}>MEDLEM?</h2>
            <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
            <Link className={styles.btn} href={'/bliv-medlem'}>{'Bliv Medlem'}</Link>

        </div>

        <div className={styles.reviews}>

            <Image src='/reviews/phoebe_larsen.jpg' alt={'phoebe_larsen'} width={150} height={150} />
            <Image src='/reviews/kathrine_udgaard.jpg' alt={'phoebe_larsen'} width={150} height={150} />        
            <Image src='/reviews/phoebe_larsen.jpg' alt={'phoebe_larsen'} width={150} height={150} />
            <Image src='/reviews/kathrine_udgaard.jpg' alt={'phoebe_larsen'} width={150} height={150} />

        </div>

    </div>

}

export default AreYouMember;