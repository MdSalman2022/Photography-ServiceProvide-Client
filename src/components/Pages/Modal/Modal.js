import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = () => {

    const navigate = useNavigate();

    const showToastMessage = () => {
        toast.success('Added New Service', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const desc = form.desc.value;
        const price = form.price.value;

        const service = {
            img: img,
            name: name,
            desc: desc,
            price: price,
            status: true
        }
        console.log(service)


        fetch("http://localhost:5000/services", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    showToastMessage()
                    event.target.reset();
                    // navigate('/')
                }
            })
    }


    return (
        <div className='w-full flex justify-center mx-auto my-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-neutral text-white mx-5 lg:mx-auto">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                <form onSubmit={handleAddService} novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="name" className="text-sm">Service Name</label>
                            </div>
                            <input type="text" name="name" id="name" placeholder="Weeding Photography" className="w-full px-3 py-2 border rounded-md text-success font-semibold " />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="desc" className="text-sm">Description</label>
                            </div>
                            <textarea type="text" name="desc" id="desc" placeholder="Description" className="w-full px-3 py-2 border rounded-md textarea  text-success font-semibold     " />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="price" className="text-sm">Price</label>
                            </div>
                            <input type="number" name="price" id="price" placeholder="10000" className="w-full px-3 py-2 border rounded-md  text-success font-semibold  " />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="price" className="text-sm">Image</label>
                            </div>
                            <input type="text" name="img" id="img" placeholder="Image link" className="w-full px-3 py-2 border rounded-md text-success font-semibold " />
                        </div>
                    </div>

                    <button type="submit" value="Submit" className="flex items-center justify-center w-full p-4 space-x-4 border border-primary text-primary rounded-md hover:bg-primary  hover:text-success font-semibold duration-300">
                        <p>Submit</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;