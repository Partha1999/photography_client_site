import React from "react";
import { useLoaderData } from "react-router-dom";
import useDocumentTitle from "../../useDocumentTitle";
import ServicesCart from "./ServicesCart/ServicesCart";

const Services = () => {
  const allServices = useLoaderData();
  // console.log(allServices);
  useDocumentTitle("Services");
  return (
    <div className="w-[85%] mx-auto py-12 ">
      <h1 className="text-5xl font-semibold text-center mb-12 text-blue-600">
        <i>Choice Your Service</i>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <ServicesCart key={service._id} service={service}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
