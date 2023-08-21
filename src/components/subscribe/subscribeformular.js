"use client"
import styles from './subscriberformular.module.css';
import { useForm } from "react-hook-form";
import { useState } from "react";

const SubscribeForm = () => {

    const [subscriberName, setSubscriberName] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);

        fetch(`https://smuknu.webmcdm.dk/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name" : data.name,
                "email" : data.email,
                "message": data.message
            }),
        }).then(res => res.json()).then(data => setSubscriberName(data.name));
            

      }; // your form submit function which will invoke after successful validation

      
      
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Subscribers {subscriberName}</legend>

                <label>Navn
                    <input {...register("name")}/>
                </label>

                <label>Email:
                    <input {...register("email")}/>
                </label>

                <label>Message:
                    <textarea {...register("message")}/>
                </label>

                <button>Send</button>
            </fieldset>
        </form>
    )

}

export default SubscribeForm;