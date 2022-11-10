import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import Login from "../../components/Authentication/Login/Login";
import Register from "../../components/Authentication/Register/Register";
import AddReview from "../../components/Pages/AddReview/AddReview";
import Blog from "../../components/Pages/Blog/Blog";
import Home from "../../components/Pages/Home/Home";
import MyReviews from "../../components/Pages/MyReviews/MyReviews";
import ReviewList from "../../components/Pages/ReviewList/ReviewList";
import ReviewUpdate from "../../components/Pages/ReviewUpdate/ReviewUpdate";
import Services from "../../components/Pages/Services/Services";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";

import Main from "../../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://y-nine-rose.vercel.app/homeservice'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('https://y-nine-rose.vercel.app/homeservice'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('https://y-nine-rose.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/addreview/:id',
                loader: ({ params }) => fetch(`https://y-nine-rose.vercel.app/addreview/${params.id}`),
                element: <ReviewUpdate></ReviewUpdate>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://y-nine-rose.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/reviews',
                // loader: () => fetch('https://y-nine-rose.vercel.app/reviews'),
                element: <ReviewList></ReviewList>
            },
            {
                path: '/myreviews',
                // loader: () => fetch('https://y-nine-rose.vercel.app/addreview'),
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                loader: () => fetch('https://y-nine-rose.vercel.app/services'),
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/addreview',
                element: <AddReview></AddReview>
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