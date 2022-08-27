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

  const sessionUser = useSelector((state) => state.session.user);
  const reviews = Object.values(useSelector((state) => state.reviews));

  const listingReviews = reviews.filter((review) => {
    return review.listingId === listing?.listing?.id;
  });

  useEffect(() => {
    dispatch(getReviews());
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div className="reviews-container">
      <h1 id="reviews-heading">CABIN REVIEWS</h1>
      {sessionUser ?
      <CreateReview />
      : null}
      {listingReviews.length ?
      <>
      {listingReviews?.map((review) => (
        <div className="reviews-ul" key={review?.id}>
          <div className="reviews-review-container">
            <div className="reviews-user-and-time">
              <p><GetUsers userId={review?.userId} /></p>&nbsp;&nbsp;
              <p id="reviews-timestamp">{ moment(review?.createdAt).format("MMM Do, YYYY")}</p>
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
      </>
      : <p id="no-reviews-text">Whoops. Looks like there are no reviews for this cabin.</p>}
    </div>
  );
};

export default Reviews;
