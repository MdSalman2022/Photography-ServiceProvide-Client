import React from 'react';

const Faq = () => {
    return (
        <section className="background py-20">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you work hourly?</summary>
                        <div className="px-4 pb-4">
                            <p>Yes but i also work on project based job.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Have you ever worked for any industry</summary>
                        <div className="px-4 pb-4">
                            <p>Yes, i have</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What's your gear?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>I use "Sony A7 III" for primary usage.I got 14mm, 50mm, 85mm, 200mm, 700mm lens.As for drone i got DJI Mavic 3. For action camera i use Go pro 9.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;