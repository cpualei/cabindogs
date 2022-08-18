import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateReview from "../CreateReview";
import GetUsers from "../GetUsers";
import { getListings } from "../../store/listings";
import { getReviews, deleteReview } from "../../store/reviews";
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
        <>
        {/* {listingReviews.length > 0 ? */}
        <div className="reviews-ul" key={review?.id}>
          <div className="reviews-user-and-review">
        <GetUsers userId={review?.userId} />
          <div id="reviews-content">{review?.review}</div>
          </div>
          {/* {sessionUser?.id === review?.userId ? */}
          <button id="review-delete-btn" onClick={(e) => dispatch(deleteReview(review))}>
            Delete review
          </button>
          {/* : null} */}
        </div>
          {/* : <p id="ASDF">"Be the first to leave a review!"</p>} */}
        </>
      ))}
    </div>
  );
};

export default Reviews;
