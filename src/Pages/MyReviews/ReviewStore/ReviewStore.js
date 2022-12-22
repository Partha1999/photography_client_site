import React, { useContext, useEffect, useState } from "react";
import FilterReview from "../FilterReview/FilterReview";

const ReviewStore = ({ _id }) => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const serviceReviews = reviews?.filter((x) => x.service === _id);
  console.log(serviceReviews);

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto">
        {serviceReviews?.map((s) => (
          <FilterReview key={s._id} s={s}></FilterReview>
        ))}
      </div>
    </div>
  );
};

export default ReviewStore;
