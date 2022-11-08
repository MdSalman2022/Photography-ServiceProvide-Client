import React from 'react';
import { Link } from 'react-router-dom'
import banner from '../../Assets/peter.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero max-h" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-64">
                        <h1 className="mb-5 text-5xl font-bold">PETER McKinnon</h1>
                        <p className="mb-5">Make Your Event A Wonderful Story</p>
                        <Link to='/services'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;