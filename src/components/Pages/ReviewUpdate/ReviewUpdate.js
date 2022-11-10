import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ReviewUpdate = () => {
    const storedReview = useLoaderData()
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()


    const showToastMessage = () => {
        toast.success('Added your review', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = storedReview?.email || 'unregistered';
        const message = form.message.value;
        const rating = form.rating.value;
        const service_id = storedReview?.service_id
        const serviceName = storedReview?.serviceName

        const review = {
            photoURL: photoURL,
            name: name,
            message: message,
            rating: rating,
            service_id: service_id,
            email: email,
            serviceName: serviceName,
            status: true,
        }

        console.log(review)

        fetch(`https://y-nine-rose.vercel.app/addreview/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Review updated successfully')
                    console.log(data)
                    showToastMessage()
                    navigate('/')
                }
            })
    }






    return (
        <div>
            <div className="flex flex-col max-w-xl shadow-sm rounded-xl p-2">
                <div className="flex flex-col items-start w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-start py-6 space-y-3">
                        <span className="text-start">How was your experience?</span>

                    </div>
                    <form onSubmit={handleUpdate} className="flex flex-col w-full">

                        <fieldset className="space-y-1 sm:w-60 ">
                            <input type="range" name="rating" className="w-full accent-yellow-400 bg-success" defaultValue={storedReview?.review} min="1" max="5" />
                            <div aria-hidden="true" className="flex justify-between px-1">
                                <span className='text-primary'><FaStar /></span>
                                <span className='text-primary'><FaStar /></span>
                                <span className='text-primary'><FaStar /></span>
                                <span className='text-primary'><FaStar /></span>
                                <span className='text-primary'><FaStar /></span>
                            </div>
                        </fieldset>
                        <br />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="name" className=" text-sm">Name</label>
                            </div>
                            <input type="text" name="name" id="name" defaultValue={user?.displayName} placeholder="John Doe" className="w-full px-3 py-2 border rounded-md text-success" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="name" className=" text-sm">Email</label>
                            </div>
                            <input type="email" name="email" id="email" defaultValue={user?.email} placeholder="john@email.com" className="w-full px-3 py-2 border rounded-md text-success" readOnly />
                        </div>
                        <div className="space-y-2 my-5">
                            <div className="flex justify-between">
                                <label for="price" className="text-sm">Image</label>
                            </div>
                            <input type="text" name="photoURL" id="photoURL" defaultValue={user?.photoURL} placeholder="Image link" className="w-full px-3 py-2 border rounded-md text-success " />
                        </div>
                        <div className="flex justify-between my-2">
                            <label for="price" className="text-sm">Review</label>
                        </div>
                        <textarea rows="3" name="message" defaultValue={storedReview?.message} placeholder="Message..." className="p-4 rounded-md resize-none "></textarea>

                        <button type="submit" className="py-4 my-8 btn font-semibold btn-primary rounded-md ">Update feedback</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ReviewUpdate;