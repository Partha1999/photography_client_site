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

          <div className="space-y-4">
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                Difference between SQL and NoSQL?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                SQL is the programming language used to interface with
                relational databases. Relational databases model data as records
                in rows and tables with logical links between them. NoSQL is a
                class of DBMs that are non-relational and generally do not use
                SQL. <br />
                There are five practical differences between SQL and NoSQL:
                1.Language <br />
                2.Scalability <br />
                3.Structure <br />
                4.Properties <br />
                5.Support and communities
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                What is JWT, and how does it work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                SON Web Token (JWT) is an open standard (RFC 7519) for securely
                transmitting information between parties as JSON object. It is
                compact, readable and digitally signed using a private key/ or a
                public key pair by the Identity Provider(IdP). So the integrity
                and authenticity of the token can be verified by other parties
                involved. The purpose of using JWT is not to hide data but to
                ensure the authenticity of the data. JWT is signed and encoded,
                not encrypted. JWT is a token based stateless authentication
                mechanism. Since it is a client-side based stateless session,
                server doesn't have to completely rely on a datastore(database)
                to save session information.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                What is the difference between javascript and NodeJS?
              </summary>
              
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-600">
                How does NodeJS handle multiple requests at the same time?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Given a NodeJS application, since Node is single threaded, say
                if processing involves a Promise.all that takes 8 seconds, does
                this mean that the client request that comes after this request
                would need to wait for eight seconds? No. NodeJS event loop is
                single threaded. The entire server architecture for NodeJS is
                not single threaded. Before getting into the Node server
                architecture, to take a look at typical multithreaded request
                response model, the web server would have multiple threads and
                when concurrent requests get to the webserver, the webserver
                picks threadOne from the threadPool and threadOne processes
                requestOne and responds to clientOne and when the second request
                comes in, the web server picks up the second thread from the
                threadPool and picks up requestTwo and processes it and responds
                to clientTwo. threadOne is responsible for all kinds of
                operations that requestOne demanded including doing any blocking
                IO operations. The fact that the thread needs to wait for
                blocking IO operations is what makes it inefficient. With this
                kind of a model, the webserver is only able to serve as much
                requests as there are threads in the thread pool.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
