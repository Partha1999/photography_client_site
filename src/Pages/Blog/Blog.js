import React from "react";
import useDocumentTitle from "../../useDocumentTitle";

const Blog = () => {
  useDocumentTitle("Blog");
  return (
    <div>
      <section className=" text-gray-800 mb-16 lg:mb-24 mt-8 lg:mt-16">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-4xl font-bold sm:text-5xl mb-10 text-center">
            Blog
          </h2>

         
        </div>
      </section>
    </div>
  );
};

export default Blog;
