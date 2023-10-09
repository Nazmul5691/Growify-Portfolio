import { Link, useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const details = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const detail = details.find(detail => detail.id === idInt)
    // console.log(detail);
    return (
        <div className="w-[70%] mx-auto">
            <div className="mt-10">
                <h3 className="text-2xl text-center mb-3">Details of : <span className="font-bold text-purple-500">{detail.title}</span> </h3>
                <img className="w-full h-[80vh] rounded-md" src={detail.image} alt="" />
               <div className="p-4">
                    <h2 className="my-5 font-bold text-2xl text-purple-500">{detail.title}</h2>
                    <p>{detail.description}</p>
                    <div className="flex justify-between items-center">
                        <Link to='/' className="btn btn-primary mt-4">Home</Link>
                        <button className="btn">PRICE : ${detail.price}</button>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default ServiceDetails;