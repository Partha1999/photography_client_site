import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useDocumentTitle from "../../useDocumentTitle";
import useAuth from "../Hooks/useAuth";
import ReviewCard from "./ReviewStore/ReviewCard/ReviewCard";

const MyReviwes = () => {
  const [deleteData, setDeleteData] = useState([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure delete this review");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = deleteData.filter((odr) => odr._id !== id);
            setDeleteData(remaining);
          }
        })
        .finally(window.location.reload());
    }
  };
  const reviews = useLoaderData();
  console.log(reviews);
  const { user } = useAuth();
  const myReviews = reviews?.filter((x) => x.userImage === user?.photoURL);
  const { _id } = myReviews;
  console.log("This is array", myReviews);
  useDocumentTitle("My Reviews");
  return (
    <div>
      {myReviews.length === 0 ? (
        <>
          <section className=" text-gray-800 py-20">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
              <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                No reviews here <br />
                <span className="text-blue-600">Please</span> <br />
                Give your Opinion
              </h1>
              <p className="px-8 mt-8 mb-12 text-lg"></p>
              <div className="flex flex-wrap justify-center">
                <Link to="/services">
                  <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-600 text-gray-50">
                    Review
                  </button>
                </Link>
                <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
                  Dashbord
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[80%] mx-auto my-20">
            {myReviews.map((r) => (
              <ReviewCard
                r={r}
                key={_id}
                handleDelete={handleDelete}
              ></ReviewCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviwes;
