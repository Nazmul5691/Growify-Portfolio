import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import Portfolio from "../pages/Portfolio/Portfolio";
import FreeConsultation from "../pages/FreeConsultation/FreeConsultation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:  <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/freeConsultation',
                element: <FreeConsultation></FreeConsultation>
            }

            
        ]
    }
]);

export default router;