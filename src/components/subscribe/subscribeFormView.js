import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import styles from './subscriberformular.module.css';

const SubscribeFormView = ({setFormSubmitted, setSubscriberName}) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required().email('Skal være en rigit email'),
        message: Yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm(
        {
            resolver: yupResolver(validationSchema),
        }
      );

    const onSubmit = (data) => {

        console.log(data);

        let dataToSend = {
            "name" : data.name,
            "email" : data.email,
            "message": data.message
        }

        fetch(`https://smuknu.webmcdm.dk/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        }).then(res => res.json()).then(data => {
            setSubscriberName(data.name)
            setFormSubmitted(true);
        });
            

      }; // your form submit function which will invoke after successful validation


    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <legend>Subscribers</legend>

                        <label>Navn
                            <input {...register("name")} className={errors.name?.message ? styles.formError : ''}/>
                            {/* {errors.name?.message && <p>{errors.name?.message}</p>} */}
                        </label>

                        <label>Email:
                            <input {...register("email")}  className={errors.name?.message ? styles.formError : ''}/>
                            {/* {errors.email?.message && <p>{errors.email?.message}</p>} */}
                        </label>

                        <label>Message:
                            <textarea {...register("message")}  className={errors.name?.message ? styles.formError : ''}/>
                            {/* {errors.message?.message && <p>{errors.message?.message}</p>} */}
                        </label>

                        <button>Send</button>
                    </fieldset>
                </form>
    )
}

export default SubscribeFormView;