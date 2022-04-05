import React from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const Review = ({ review: { id, name, picture, review, rating } }) => {
  return (
    <div className="bg-blue-500 shadow-blue-500/50 shadow-lg px-8 py-5 rounded-lg">
      <div className="flex flex-col justify-center items-center pb-3">
        <img className=" rounded-full" src={picture} alt="" />
        <div className="flex flex-col md:flex-row items-center justify-center pt-3">
          <h2 className="px-2 text-xl font-semibold">{name}</h2>

          <Rating
            className="px-2 text-xl pt-1"
            initialRating={rating}
            emptySymbol={<FaStar />}
            fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
            readonly
          ></Rating>
        </div>
      </div>
      <div className="indent-8">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
