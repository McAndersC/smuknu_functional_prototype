"use client"

import { useState } from "react";
import SubscribeResponseView from './subscribeResponse';
import SubscribeFormView from './subscribeFormView';



const SubscribeForm = () => {

    const [subscriberName, setSubscriberName] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <div>
          {formSubmitted ? <SubscribeResponseView name={subscriberName} /> : <SubscribeFormView setFormSubmitted={setFormSubmitted} setSubscriberName={setSubscriberName}/>}
        </div>
    )

}

export default SubscribeForm;