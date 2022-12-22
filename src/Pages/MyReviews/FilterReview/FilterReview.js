import React from "react";

const FilterReview = ({ s }) => {
  const { _id, email, message, rating, serviceName, userImage, customer } = s;

  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800 mx-auto mb-10">
        <div className="flex items-center space-x-3">
          <img
            alt=""
            src={userImage}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600">{customer}</p>

            <p className="text-xs font-semibold text-gray-600">{email}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3"> {serviceName}</h2>
          <h2 className=" font-semibold">
            Review : {message.slice(0, 100)}...
          </h2>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex">
            <div
              aria-label="Share this post"
              type="button"
              className=" text-center flex items-center gap-1"
            >
              <p className="">Rating : {rating}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          </div>
          <div className="flex space-x-2 text-sm text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterReview;
