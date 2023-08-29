'use client'
import styles from './accordians.module.css';
import { useState } from "react";

const Accordian = ({header, body}) => {

    const [isActive, setIsActive] = useState(false);

    return <div>
        <h2 onClick={() => setIsActive(!isActive)}>{header}</h2>
            <div className={`${styles.textblock} ${isActive ? styles.active : ''}`}>{body}</div>
        </div>

};

export default Accordian;