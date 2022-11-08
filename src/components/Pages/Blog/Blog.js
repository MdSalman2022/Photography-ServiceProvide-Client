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
                    <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    2.What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        some of the options are: STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress</p>
                </div>
            </div>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow  rounded-box my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-info peer-checked:text-info-content">
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;