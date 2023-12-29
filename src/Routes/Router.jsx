import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Homepage/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Services from "../Pages/Services";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signup',
                element:<Signup></Signup>,
            },

        ]
    },
])
export default router;