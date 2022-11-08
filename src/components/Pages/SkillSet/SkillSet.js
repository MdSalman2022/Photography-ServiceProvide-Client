import React from 'react';
import { FiCamera } from 'react-icons/fi';
import { BiVideoRecording } from 'react-icons/bi';
import { MdFaceRetouchingNatural } from 'react-icons/md';

const SkillSet = () => {
    return (
        <div>
            <section className=" bg-base-100 text-neutral  py-20">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">

                    <p className="px-6 py-2 bold lg:text-5xl tracking-wide">What can do for you</p>
                    <div className="flex justify-center space-x-3">
                        <div className='grid grid-cols-3  place-items-center gap-10 '>
                            <div className='text-center px-5 '>
                                <p className='flex justify-center leading-10 text-5xl pb-5'><FiCamera /></p>
                                <h3 className='text-3xl leading-10'>Photo shooting</h3>
                                <p className='text-xl leading-10'>High-quality and vibrant photos</p>
                            </div>
                            <div className='text-center px-5'>
                                <p className='flex justify-center leading-10 text-5xl pb-5'><BiVideoRecording /></p>
                                <h3 className='text-3xl leading-10'>Photo shooting</h3>
                                <p className='text-xl leading-10'>High-quality and vibrant photos</p>
                            </div>
                            <div className='text-center px-5'>
                                <p className='flex justify-center leading-10 text-5xl pb-5'><MdFaceRetouchingNatural /></p>
                                <h3 className='text-3xl leading-10'>Photo shooting</h3>
                                <p className='text-xl leading-10'>High-quality and vibrant photos</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillSet;