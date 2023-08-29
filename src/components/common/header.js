import styles from './header.module.css'
const Header = ({text}) => {

    return <div className={styles.productsHeader}>
        <h2>{text?.black}<br/><span className={styles.productsHeaderSub}>{text?.pink}</span></h2>
    </div>

}

export default Header