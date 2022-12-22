import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../ContextAPI/AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import ReviewStore from "../../MyReviews/ReviewStore/ReviewStore";
import useDocumentTitle from "../../../useDocumentTitle";

const ServiceDetails = () => {
  const oneService = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, img, price, name, rating, description } = oneService;
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerName = form.customerName.value;
    const email = user?.email || "unregistered";
    const rating = form.rating.value;
    const message = form.message.value;

    const review = {
      service: _id,
      userImage: user?.photoURL || "No Image",
      serviceName: name,
      customer: customerName,
      email,
      rating,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();

        if (data.acknowledged) {
          toast.success("Review Successfully", {
            theme: "colored",
          });

          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  useDocumentTitle("ServiceDetails");
  return (
    <div>
      <section className="bg-slate-400 lg:w-[90%] mx-auto mt-10 lg:mt-[80px] pt-10 pb-10">
        <section className="lg:flex  lg:w-[90%] mx-auto  mb-14 rounded-lg  p-5 bg-slate-200 ">
          <figure className="lg:w-[40%]">
            <PhotoProvider>
              <PhotoView src={img}>
                <img className="w-full h-full" src={img} alt="" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="lg:w-[60%] lg:ml-8">
            <div className="flex items-center mb-5 mt-5 lg:mt-0">
              <h1 className="text-4xl font-bold mb-3 w-full">{name}</h1>
            </div>
            <p className="my-3 text-xl">{description}</p>
            <div className="mt-6">
              <p className="text-xl font-bold">
                Price : <small>{price}$</small>
              </p>
              <div className="flex items-center gap-1 my-4">
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

              <button className="p-2 mt-2 rounded-md bg-red-600 text-white">
                Purcess Service
              </button>
            </div>
          </div>
        </section>
        <ReviewStore _id={_id}></ReviewStore>
        {user?.photoURL ? (
          <>
            <section className="mx-auto bg-blue-500 w-[90%] p-12">
              <i>
                <h1 className="text-center text-4xl font-bold mb-10 text-white">
                  Submit Your Review
                </h1>
              </i>
              <form onSubmit={handleReview}>
                <div className="flex gap-2 mb-3">
                  <input
                    name="customerName"
                    type="text"
                    placeholder="Name"
                    required
                    defaultValue={user?.displayName}
                    className="input input-ghost w-full bg-white input-bordered"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="Your email"
                    required
                    defaultValue={user?.email}
                    className="input input-ghost w-full  bg-white input-bordered"
                  />
                </div>
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  required
                  className="input input-ghost w-full bg-white mb-3 input-bordered"
                />
                <textarea
                  name="message"
                  className="textarea textarea-bordered bg-white  h-24 w-full"
                  placeholder="Your Opinion"
                  required
                ></textarea>

                <input className="btn" type="submit" value="Submit" />
              </form>
            </section>
          </>
        ) : (
          <>
            <i>
              <h1 className="text-center text-4xl text-white font-bold ">
                Please Login to Give your Opinion <br />
                <Link className="underline" to="/login">
                  Login
                </Link>
              </h1>
            </i>
          </>
        )}
      </section>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ServiceDetails;
