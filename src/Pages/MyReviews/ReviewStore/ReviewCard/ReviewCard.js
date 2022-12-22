import React, { useContext, useState } from "react";
import { AuthContext } from "../../../ContextAPI/AuthProvider/AuthProvider";

const ReviewCard = ({ r, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { _id, email, message, rating, serviceName, userImage, customer } = r;

  const updateReview = (data) => {
    fetch(`http://localhost:5000/reviews/${r?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800 mx-auto">
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
          {/* moddal btn */}
          <div className="flex space-x-2 text-sm text-gray-600">
            <label
              htmlFor={_id}
              className="btn flex items-center p-1 space-x-1.5"
            >
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
            </label>

            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <section className="mx-auto bg-blue-500 w-[90%] p-12">
                  <i>
                    <h1 className="text-center text-4xl font-bold mb-10 text-white">
                      Update Your Review
                    </h1>
                  </i>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const name = e.target.customerName.value;
                      const email = e.target.email.value;
                      const rating = e.target.rating.value;
                      const message = e.target.message.value;
                      //   const id = r._id;
                      const data = { name, email, rating, message };
                      updateReview(data);
                      console.log(name, email);
                    }}
                  >
                    <div className="flex gap-2 mb-3">
                      <input
                        name="customerName"
                        type="text"
                        placeholder="Name"
                        defaultValue={r?.customer}
                        className="input input-ghost w-full bg-white input-bordered"
                      />
                      <input
                        name="email"
                        type="text"
                        placeholder="Your email"
                        defaultValue={r?.email}
                        className="input input-ghost w-full  bg-white input-bordered"
                      />
                    </div>
                    <input
                      name="rating"
                      type="number"
                      placeholder="Rating"
                      defaultValue={r?.rating}
                      className="input input-ghost w-full bg-white mb-3 input-bordered"
                    />
                    <textarea
                      name="message"
                      className="textarea textarea-bordered bg-white  h-24 w-full"
                      placeholder="Your Opinion"
                      defaultValue={r?.message}
                      required
                    ></textarea>

                    <input className="btn" type="submit" value="Submit" />
                  </form>
                </section>
                <div className="modal-action">
                  <label htmlFor={_id} className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(_id)}
              type="button"
              className="flex items-center p-1 space-x-1.5"
            >
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
