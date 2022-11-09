import React, { useContext } from 'react';
import { GrAdd } from 'react-icons/gr';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Modal from '../Pages/Modal/Modal';
import ServiceCard from '../Pages/ServiceCard/ServiceCard';


const AddService = () => {

    const services = useLoaderData();

    const { user } = useContext(AuthContext)

    return (
        <div className='bg-base-100 relative h-full'>
            <section className="text-neutral  pt-5 pb-10">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">

                    <p className="px-6 py-2 bold lg:text-5xl tracking-wide">Add Services</p>
                    <div className="flex justify-center space-x-3">
                        <div className='grid grid-cols-3  place-items-center gap-10 '>


                            <div className="flex rounded shadow-md  col-span-3">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src="https://i.ibb.co/h1y8rdb/upload.png" alt="Shoes" className='animate-pulse' /></figure>
                                    <div className="card-body h-64 ">
                                        <h2 className="card-title ">Service name</h2>
                                        <p>Service Description</p>
                                        <p>Price</p>
                                        <div className="card-actions justify-end">
                                            <div className='w-full mx-auto text-center z-40'>
                                                <button className="">
                                                    <label htmlFor="my-modal-3" className='btn btn-primary my-10'>
                                                        Add New Service
                                                    </label >
                                                </button>
                                            </div>

                                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box bg-neutral relative" >
                                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 text-xl text-primary">✕</label>
                                                    <Modal></Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="flex justify-center items-center px-6 py-2 bold lg:text-5xl tracking-wide border-2 h-full rounded-xl border-success w-full">Added Services</p>

                            {
                                services.map(service => service.status ? <ServiceCard service={service}></ServiceCard> : '')
                            }
                        </div>

                    </div>

                    <ToastContainer />
                </div>
            </section>


        </div>
    );
};

export default AddService;