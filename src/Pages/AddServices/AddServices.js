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
    <div>
      <section className="mx-auto  lg:w-[90%] lg:p-40 p-10">
        <form onSubmit={handleReview}>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-xl">
                Service Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="service"
                required
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-xl">
                Service Photo
              </label>
              <input
                name="img"
                type="text"
                required
                placeholder="https://"
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-xl">
                Rating
              </label>
              <input
                name="rating"
                type="text"
                required
                placeholder="price"
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-xl">
                Price
              </label>
              <input
                name="price"
                type="text"
                placeholder="rating"
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-600 border-gray-300 text-gray-900"
              />
            </div>
          </div>
          <div className="mt-6 mb-2">
            <label for="website" className="text-xl">
              Description
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered bg-white mt-1 h-36 w-full"
              placeholder="description"
              required
            ></textarea>
          </div>

          <div className="flex justify-center items-center mt-7">
            <input
              className="btn px-4 py-2 border-0 text-white w-[150px] rounded-md bg-red-500"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </section>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AddServices;
