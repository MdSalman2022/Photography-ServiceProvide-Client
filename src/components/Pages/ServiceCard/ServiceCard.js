import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, price, name, desc } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} className='w-full h-52 object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title ">
                    {name}
                    <div className="badge badge-success">NEW</div>
                </h2>
                <p>{desc.substring(0, 100) + "..."}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;