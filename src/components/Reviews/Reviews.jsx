import React from "react";
import useReview from "../hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <h2 className=" font-semibold text-4xl text-cyan-400 text-center my-6">
        What Our Customers Say!
      </h2>
      <div className="px-5 pb-12 md:w-[70%] m-auto  grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 ">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
