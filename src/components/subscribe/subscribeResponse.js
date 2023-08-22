import styles from './subscriberformular.module.css';

const SubscribeResponseView = ({name}) => {
    return (
        <div className={styles.responseView}>
            TAK
                FORM ER AFSENDT TAK -  {name}
        </div>
    )
}

export default SubscribeResponseView;