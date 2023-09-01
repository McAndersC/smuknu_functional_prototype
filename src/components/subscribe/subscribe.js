'use client'

import { useState } from 'react';
import SubscribeResponseView from './subscribeResponse';
import SubscribeForm from './subscribeForm';

const Subscribe = () => {

    const [subscriberName, setSubscriberName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <div>
            {formSubmitted ? <SubscribeResponseView name={'subscriberName'} /> :
           <SubscribeForm setFormSubmitted={setFormSubmitted} setSubscriberName={setSubscriberName}/>}
        </div>
    )

}

export default Subscribe;