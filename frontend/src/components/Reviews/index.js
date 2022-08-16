import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateReview from "../CreateReview";
import { getListings } from "../../store/listings";
import { getReviews } from "../../store/reviews";
import "./Reviews.css";

const Reviews = (listing) => {
  const dispatch = useDispatch();

  const reviews = Object.values(useSelector(state => state.reviews));

  const listingReviews = reviews.filter(review => {
    return review.listingId === listing?.listing?.id
  });

  useEffect(() => {
    dispatch(getReviews());
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div className="reviews-container">
      <h1 id="reviews-heading">Cabin reviews</h1>
      <CreateReview />
        {listingReviews.map((review) => (
            <ul key={review.id}>
                <div>{review.userId}</div>
                <div>{review.review}</div>
            </ul>
        ))}
    </div>
  );
}

export default Reviews;
