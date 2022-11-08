import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';


const HomeService = () => {

    const services = useLoaderData()

    return (
        <div>
            <section className=" bg-primary text-neutral  py-20">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                    <section className="text-neutral  pt-5 pb-10">
                        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">

                            <p className="px-6 py-2 bold lg:text-5xl tracking-wide">Our Services</p>
                            <div className="flex justify-center space-x-3">
                                <div className='grid grid-cols-3  place-items-center gap-10 '>
                                    {
                                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                                    }
                                </div>

                            </div>

                        </div>
                    </section>
                    <Link to='/services'><button className="btn w-64 btn-outline btn-success">SEE ALL</button></Link>

                </div>
            </section>
        </div>
    );
};

export default HomeService;