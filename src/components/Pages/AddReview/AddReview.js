import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddReview = ({ services }) => {



    console.log(services[0].service_id)

    const { user, setLoading } = useContext(AuthContext)

    const showToastMessage = () => {
        toast.success('Added your review', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    const handleAddReview = event => {
        event.preventDefault();

        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const rating = form.rating.value;
        const service_id = services[0]?.service_id

        const review = {
            photoURL: photoURL,
            name: name,
            message: message,
            rating: rating,
            service_id: service_id,
            email: email,
            status: true,
        }

        console.log(review)

        fetch("http://localhost:5000/addreview", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    console.log('review posted')
                    showToastMessage()
                    event.target.reset();
                    // navigate('/')
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
                    <form onSubmit={handleAddReview} className="flex flex-col w-full">

                        <fieldset className="space-y-1 sm:w-60 ">
                            <input type="range" name="rating" className="w-full accent-yellow-400 bg-success" defaultValue="5" min="1" max="5" />
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
                                <label for="name" className=" text-sm">Name</label>
                            </div>
                            <input type="email" name="email" id="email" defaultValue={user?.email} placeholder="John Doe" className="w-full px-3 py-2 border rounded-md text-success" readOnly />
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
                        <textarea rows="3" name="message" placeholder="Message..." className="p-4 rounded-md resize-none "></textarea>

                        <button type="submit" className="py-4 my-8 btn font-semibold btn-primary rounded-md ">Leave feedback</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default AddReview;