import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/Service/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../pages/Gallery/Gallery";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:  <Home></Home>,
                loader : () => fetch('/services.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/gallery',
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader : () => fetch('/services.json')
            }
        ]
    }
]);

export default router;