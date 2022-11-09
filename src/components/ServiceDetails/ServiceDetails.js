import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider.js';
import AddReview from '../Pages/AddReview/AddReview.js';
import ReviewList from '../Pages/ReviewList/ReviewList.js';

const ServiceDetails = () => {

    const [services] = useLoaderData();
    // console.log(services);
    const { name, price, img, desc, service_id } = services;


    return (
        <div className='my-20 px-5 lg:px-10'>
            <div className='container mx-auto flex flex-col'>
                <img src={img} alt="" className='rounded-2xl' />
                <h1 className="text-3xl font-bold py-10">{name}</h1>
                <p className="text-xl tracking-wider leading-10 font-semibold">Rating: {price} / hr</p>
                <br />
                <p className="text-xl tracking-wider leading-10">{desc}</p>
                <h1 className="text-3xl font-bold py-10">Review of {name}</h1>
                <div className="">
                    <AddReview></AddReview>
                    <ReviewList></ReviewList>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;