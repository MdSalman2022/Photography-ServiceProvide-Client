import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../useTitle/useTitle';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {

    useTitle('My Review')

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/addreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



    const handleDelete = review => {
        const permission = window.confirm(`Are you sure you want to delete: ${review.name}`)
        console.log(permission);
        console.log(review._id);
        if (permission) {
            fetch(`http://localhost:5000/addreview/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully')
                        const remainingReviews = reviews.filter(t => t._id !== review._id)
                        setReviews(remainingReviews)
                    }
                })
        }
    }

    return (
        <div>
            <div className="flex flex-col mx-auto  items-center gap-10 py-10 min-h-screen ">
                {
                    reviews.map(review =>
                        <div key={review._id}>
                            <div className="container flex flex-col  w-screen p-6 divide-y rounded-md bg-success text-white">
                                <div className="flex justify-between p-4 ">


                                    <div className="flex space-x-4 ">
                                        <div>
                                            <img src={review?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{review?.name}</h4>
                                            <h4 className="font-bold">Service Name: {review?.serviceName}</h4>
                                            <span className="text-xs dark:text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold ">{review?.rating}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-5">
                                    <p className=''>{review?.message}</p>
                                    <div>
                                        <Link to={`/addreview/${review._id}`}>
                                            <button className="btn btn-success w-24 mr-2">Edit</button>
                                        </Link>
                                        <button onClick={() => handleDelete(review)} className="btn btn-error w-24">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyReviews;