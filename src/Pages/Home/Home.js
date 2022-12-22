import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useDocumentTitle from "../../useDocumentTitle";

import Card from "./Card/Card";
import Features from "./Features/Features";
import PercesService from "./PurcesSurvice/PercesService";

const Home = () => {
  const data = useLoaderData();
  const [one, two, there, ...rest] = data;
  console.log(one, two, rest);

  useDocumentTitle("Home");
  return (
    <div>
      <section>
        <div className="bg-orange-500">
          <div className="container flex flex-col items-center px-4 py-10 pb-24 mx-auto text-center lg:pb-56 md:pt-16 md:pb-36 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              Wedding Photography
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Find the best wedding photography services you need to help you
              successfully meet your project planning goals and deadline .
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to="/services">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded border-gray-300 hover:bg-gray-100 text-gray-50 hover:text-black"
                >
                  Services
                </button>
              </Link>
              <label
                htmlFor="my-drawer"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 hover:bg-gray-100 text-gray-50 hover:text-black drawer-button"
              >
                Open
              </label>
            </div>
          </div>
        </div>
        <div className="w-[1050px] mx-auto hidden lg:block mb-12 mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500">
   
        </div>
      </section>
      <h1 className="text-center text-4xl font-semibold text-blue-600">
        <i> Services</i>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[90%] ">
        {rest.map((y) => (
          <Card key={y._id} y={y}></Card>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Link to="/services">
          <button className="btn btn-outline">See All</button>
        </Link>
      </div>

      <PercesService></PercesService>
      <Features></Features>
    </div>
  );
};

export default Home;
