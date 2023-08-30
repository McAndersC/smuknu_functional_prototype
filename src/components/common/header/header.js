import styles from './header.module.css'
const Header = ({text}) => {

    return <div className={styles.productsHeader}>
        <h2>
            <span style={{color : text?.one.color}}>{text?.one.text}</span><br/>
            <span style={{color : text?.two.color}}>{text?.two.text}</span>
        </h2>
    </div>

}

export default Header