import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { NavBar } from "../pages/Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-poppins">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;