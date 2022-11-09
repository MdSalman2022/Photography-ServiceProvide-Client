import React from 'react';

const Blog = () => {
    return (
        <div className='container my-20  mx-auto px-10'>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    1.- Difference between SQL and NoSQL.
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>A SQL Database follows a table like structure which can have an
                        unlimited number of rows and every data present inside the database
                        is properly structured with Predefined Schemas, it is basically used
                        to manipulate Relational Databases Management Systems.

                        A NoSQL Database is a Distributed Database where the data is very
                        unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                        rows but it follows a Standard Schema Definition and can store all
                        sorts of data models with large distributed data in the form of
                        key-value pairs, graph databases, documents or wide-column stores.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    2.What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                        Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.


                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;