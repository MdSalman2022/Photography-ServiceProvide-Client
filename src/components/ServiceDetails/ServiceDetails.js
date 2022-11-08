import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const [service] = useLoaderData();

    const { name, price, img, desc, review, service_id } = service;


    return (
        <div className='my-20 px-5 lg:px-10'>
            <div className='container mx-auto flex flex-col'>
                <img src={img} alt="" className='rounded-2xl' />
                <h1 className="text-3xl font-bold py-10">{name}</h1>
                <p className="text-xl tracking-wider leading-10 font-semibold">Price: {price} / hr</p>
                <p className="text-xl tracking-wider leading-10 font-semibold">Rating: {price} / hr</p>
                <br />
                <p className="text-xl tracking-wider leading-10">{desc}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;