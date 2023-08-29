'use client'
import Accordian from "./accordian";
import styles from './accordians.module.css';
import { useEffect, useState } from 'react';

const Accordians = () => {

    const [questionsData, setQuestionsData] = useState([]);

    const getQuestions = async () => {
        
        fetch(`https://smuknu.webmcdm.dk/questions`).then(res => res.json()).then(data => setQuestionsData(data));
            
      }

      useEffect(() => {

        getQuestions();
    
      }, []);

    return <div>
        <h1>Accordians {console.log(questionsData)}</h1>
        {questionsData.map( (question) => {
            return <Accordian key={question._id} header={question.question} body={question.answer}></Accordian>
        })}
        


    </div>

};

export default Accordians;