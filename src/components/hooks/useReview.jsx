import axios from "axios";
import  { useState, useEffect } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = "reviewData.json";
    axios.get(url).then(({ data }) => setReviews(data));
  }, []);

  return [reviews, setReviews];
};

export default useReview;
