
import styles from './subscriberformular.module.css';

const SubscribeForm = () => {

    return (
        <form className={styles.form}>
            <fieldset>
                <legend>Subscribers</legend>

                <label>Navn
                    <input />
                </label>

                <label>Email:
                    <input />
                </label>

                
                <label>Message:
                    <textarea />
                </label>

                <button>Send</button>
            </fieldset>
        </form>
    )

}

export default SubscribeForm;