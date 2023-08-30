'use client'
import styles from './accordians.module.css';
import { useState } from "react";
import { FaQuestion } from 'react-icons/fa';

const Accordian = ({header, body}) => {

    const [isActive, setIsActive] = useState(false);

    return <div className={`${styles.accordion} ${isActive ? styles.active : ''}`}>
      <div className={styles.accordionContainer}>
        <h2 onClick={() => setIsActive(!isActive)}><FaQuestion className={styles.icon} /> {header}</h2>
        <div className={`${styles.textblock}`} dangerouslySetInnerHTML={{__html:body}}></div>
      </div>
    </div>
};

export default Accordian;