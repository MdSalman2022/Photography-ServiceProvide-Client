import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import Register from "../../components/Authentication/Login/Register/Register";
import Home from "../../components/Home/Home";
import Main from "../../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
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