import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useDocumentTitle from "../../useDocumentTitle";

const AddServices = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      name,
      img,
      rating,
      price,
      description,
    };
    console.log(img, rating);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Add Sucessfully", {
            theme: "colored",
          });
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  useDocumentTitle("Add Services");
  return (
    
  );
};

export default AddServices;
