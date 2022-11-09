import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewList = ({ service_id }) => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service_id=${service_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service_id])

    console.log(reviews);
    return (
        <div>
            <div className="flex flex-col mx-auto justify-center items-center gap-10 py-10">
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ReviewList;