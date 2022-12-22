import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Card = ({ y }) => {
  const { _id, img, price, name, rating, description } = y;
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl mx-auto mt-14">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} className="h-[300px] " alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>{description.slice(0, 100)}...</p>
          <p className="text-xl font-semibold mt-2">Price : {price}$</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <p className="text-xl font-semibold">Rating : {rating}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
