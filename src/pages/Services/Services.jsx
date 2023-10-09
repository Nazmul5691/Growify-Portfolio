import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Home/ServiceCard";

const Services = () => {
    const services = useLoaderData()
    return (
        <div className="w-11/12  mx-auto">
                <div>
                    <h1 className="text-center mt-10 font-bold text-2xl">Our Services</h1>
                    <p className="text-center mt-2 mb-10">Unlock the magic of your special day with our expertly crafted wedding services, <br /> designed to turn your dreams into unforgettable memories.</p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 gap-4 ">
                    {
                        services.map( service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
    );
};

export default Services;