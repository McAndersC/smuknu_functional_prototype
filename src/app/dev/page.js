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

  const [active, setActive] = useState(false);

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

      <h1 onClick={() => setActive(!active)}>Produkter</h1>
      {productData?.map((product) => (
        <PrintData key={product._id} data={product}/>
      ))}
        
      
      <h1 className={`${'slim'} ${active ? 'active' : 'inactive'}`}>Questions</h1>
      {questionsData?.map((question) => (
        <PrintData key={question._id} data={question}/>
      ))}

      {active ? <div>Active</div> : <div>Inactive</div>}
        


    </div>
  )
}
