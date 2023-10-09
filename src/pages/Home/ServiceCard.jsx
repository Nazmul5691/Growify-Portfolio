/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {id, title, image, description} = service;
  return (
    <div className="">
      <div className=" border-1 h-[450px] gap-4 bg-slate-200 rounded-md">
        <div>
          <img className="w-full rounded-md" src={image} alt="" />
        </div>
        <div className="p-3">
          <h1 className="font-bold text-xl my-3  text-purple-500">{title}</h1>

          {
            description.length > 80 ?
            <p>{description.slice(0,80)} <br /> <Link to={`/services/${id}`} className="btn mt-3 btn-secondary">View Details</Link></p>
            : <p>{description}</p>
          }
         
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
