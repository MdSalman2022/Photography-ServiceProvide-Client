import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../useTitle/useTitle';


function Login() {

    const { signIn, providerLogin, setLoading, loading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    if (loading) {
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
    }
    useTitle('Login')
    const showToastMessage = () => {
        toast.error('You are logged in.', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    const from = location?.state?.from.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                showToastMessage()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const googleSignIn = event => {
        event.preventDefault();
        const Provider = new GoogleAuthProvider();
        providerLogin(Provider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }




    return (
        <div className='w-full flex justify-center mx-auto my-20'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-neutral text-white mx-5 lg:mx-auto">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center    ">Dont have account?
                    <Link href="#" rel="noopener noreferrer" className="text-primary focus:underline hover:underline" to='/register'> Sign up here</Link>
                </p>
                <div className="my-6 space-y-4">

                    <button onClick={googleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-primary  hover:text-neutral hover:transition-2s duration-300    focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>


                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full    " />
                    <p className="px-3    ">OR</p>
                    <hr className="w-full    " />
                </div>
                <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="email" className="  text-sm">Email address</label>
                            </div>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md       " />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label for="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md       " />
                            <p className='text-red-500'>{error}</p>
                        </div>
                    </div>
                    <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-primary  hover:text-neutral duration-300">
                        <p>Sign in</p>
                    </button>

                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Login
