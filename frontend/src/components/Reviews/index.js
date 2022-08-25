import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateReview from "../CreateReview";
import GetUsers from "../GetUsers";
import { getListings } from "../../store/listings";
import { getReviews, deleteReview } from "../../store/reviews";
import moment from "moment";
import "./Reviews.css";

const Reviews = (listing) => {
  const dispatch = useDispatch();

  const reviews = Object.values(useSelector((state) => state.reviews));
  const sessionUser = useSelector((state) => state.session.user);

  const listingReviews = reviews.filter((review) => {
    return review.listingId === listing?.listing?.id;
  });

  useEffect(() => {
    dispatch(getReviews());
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div className="reviews-container">
      <h1 id="reviews-heading">Cabin reviews</h1>
      <CreateReview />
      {listingReviews?.map((review) => (
        <div className="reviews-ul" key={review?.id}>
          <div className="reviews-review-container">
            <div className="reviews-user-and-time">
              <p><GetUsers userId={review?.userId} /></p>&nbsp;&nbsp;
              <p id="reviews-timestamp">{ moment().format("MMM Do YYYY")}</p>
            </div>

            <div id="reviews-content">{review?.review}</div>
          </div>
          {sessionUser?.id === review?.userId ? (
            <button
              id="review-delete-btn"
              onClick={() => dispatch(deleteReview(review))}
            >
              Delete review
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
