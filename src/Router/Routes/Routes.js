import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import Register from "../../components/Authentication/Login/Register/Register";
import Blog from "../../components/Pages/Blog/Blog";
import Home from "../../components/Pages/Home/Home";
import Services from "../../components/Pages/Services/Services";

import Main from "../../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/homeservice'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/homeservice'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;