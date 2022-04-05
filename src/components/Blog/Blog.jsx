import React from "react";

const Blog = () => {
  return (
    <div className="px-5 pb-10 md:pb-36 md:w-[60%] md:h-screen m-auto flex justify-center items-center flex-col">
      <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-8 py-5 rounded-lg">
        <h2 className="text-2xl font-bold">What is Context API?</h2>
        <p className="indent-8">
          In a React application, data is passed from parent to child using
          props. Context API is a way to effectively produce global variables
          that can be passed around child and avoid prop drilling. It can solve
          a lot of problems that modern applications face related to state
          management and how they’re passing state to their components{" "}
        </p>
      </div>

      <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-8 py-5 rounded-lg my-12">
        <h2 className="text-2xl font-bold">What is Semantic tag?</h2>
        <p className="indent-8">
          Semantic tags are those that clearly describe their meaning to both
          the developer and the browser. It's allow us to add meaning to our
          markup so that search engines, screen readers, and web browsers can
          make sense of it.
        </p>
        <br />
        <p>
          The following HTML tags can be used to break our page into identified
          parts:
        </p>
        <ul>
          <li>
            <span className="font-bold text-green-300 text-lg">header : </span>
            It defines a header for a web page.
          </li>
          <li>
            <span className="font-bold text-green-300 text-lg">nav : </span> It
            defines a container for navigation links.
          </li>
          <li>
            <span className="font-bold text-green-300 text-lg">section : </span>
            This defines a section in a web page.
          </li>
          <li>
            <span className="font-bold text-green-300 text-lg">
              {" "}
              article :{" "}
            </span>
            This element contains the main part, containing information about
            the web page.
          </li>
          <li>
            <span className="font-bold text-green-300 text-lg">aside : </span>
            The aside content is often placed as a sidebar in a document.
          </li>
          <li>
            <span className="font-bold text-green-300 text-lg">footer : </span>
            It defines a footer for a document or a section.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
