import React from 'react';
import { GrAdd } from 'react-icons/gr';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';



const Services = () => {

    const services = useLoaderData();



    return (
        <div className='bg-base-100 relative h-full'>
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
            <div className=' w-full mx-auto text-center '>
                <button className="fixed bottom-0  btn btn-circle btn-primary my-10 shadow-xl">
                    <GrAdd className=' text-5xl p-3 rounded-full' />
                </button>
            </div>
        </div>
    );
};

export default Services;