"use client"

import { useState, useEffect } from "react";

const PrintData = ({data}) => {

  return <div>
    
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <hr></hr>
    </div>

};

export default function Dev() {

  const [productData, setProductData] = useState([]);
  const [questionsData, setQuestionsData] = useState([]);

  const getProducts = async () => {
        
    fetch(`https://smuknu.webmcdm.dk/products`).then(res => res.json()).then(data => setProductData(data));
        
  }

  const getQuestions = async () => {
        
    fetch(`https://smuknu.webmcdm.dk/questions`).then(res => res.json()).then(data => setQuestionsData(data));
        
  }


  useEffect(() => {

    getProducts();
    getQuestions();

  }, []);

  return (
    <div>
      Developer

      <h1>Produkter</h1>
      {productData?.map((product) => (
        <PrintData key={product._id} data={product}/>
      ))}
        
      
      <h1>Questions</h1>
      {questionsData?.map((question) => (
        <PrintData key={question._id} data={question}/>
      ))}
        


    </div>
  )
}
