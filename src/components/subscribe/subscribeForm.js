import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import styles from './subscribe.module.css';
import { quickFont } from '@/utils/fonts';

const SubscribeForm = ({setFormSubmitted, setSubscriberName}) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('* Du skal skrive et navn'),
        email: Yup.string().required('* Du skal skrive en email').email('* Skal være en korrekt email'),
        message: Yup.string().required('* Vær venlig at skrive en besked'),
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

        let dataToSend = {
            'name' : data.name,
            'email' : data.email,
            'message': data.message
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
            
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                
            <label>Fulde Navn
                <input {...register('name')} className={errors.name?.message ? styles.formError : ''} />
                {errors.name?.message && <p>{errors.name?.message}</p>}
            </label>

            <label>E-mail:
                <input {...register('email')}  className={errors.name?.message ? styles.formError : ''}/>
                {errors.email?.message && <p>{errors.email?.message}</p>}
            </label>

            <label>Ris og/eller ros:
                <textarea {...register('message')}  className={errors.name?.message ? styles.formError : ''}/>
                {errors.message?.message && <p>{errors.message?.message}</p>}
            </label>

            <button className={quickFont.className}>Opret</button>
                
        </form>
    )
}

export default SubscribeForm;