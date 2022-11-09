import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {

    const { img, price, name, desc, status, _id } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img} >
                        <img src={img} alt="" className='w-full h-52 object-cover' />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body h-64 ">
                <h2 className="card-title ">
                    {name}
                    {
                        status ?
                            <div className="badge badge-success">NEW</div>
                            :
                            <></>
                    }
                </h2>
                <p>{desc.substring(0, 100) + "..."} <a href="" className='text-accent'>Read More</a></p>
                <p className="">Price: {price} / hr</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-success">Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;