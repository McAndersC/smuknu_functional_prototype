import Header from '../common/header/header';
import { getAllReviews } from '../../services/dataservice';
import Review from './review';
import styles from './reviews.module.css';
import { useState, useEffect } from 'react';


const Reviews = () => {
    
    const [reviewsData, setReviewsData] = useState([]);

    const getReviews = async () => {
        
        getAllReviews().then(data => setReviewsData(data));
            
    }

    useEffect(() => {

        getReviews();
    
    }, []);


    const headline = {
        one : {
            text : 'SKØNHEDER',
            color : '#fa96aa'
        },
        two : {
            text : 'UDTALER',
            color : '#000'
        }
    }

    return <div className={styles.reviews}>
        <Header text={headline}></Header>
        <div> 
            {reviewsData?.length !== 0 ? reviewsData.map((review, index) => <Review key={index} review={review}></Review>) : null}  
        </div>
        
    </div>

};

export default Reviews;