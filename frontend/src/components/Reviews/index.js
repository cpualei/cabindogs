import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getListings } from "../../store/listings";
import { getReviews } from "../../store/reviews";
import "./Reviews.css";

const Reviews = (listing) => {
  const { id } = useParams();
  const dispatch = useDispatch();

//   const [review, setReview] = useState("");
//   const [errors, setErrors] = useState([]);

  const listings = useSelector(state =>  state.listings);
  const reviews = Object.values(useSelector(state => state.reviews));
//   const reviews = useSelector(state => state.reviews);

//   const reviewsReversed = reviews.reverse();
  const listingReviews = reviews.filter(review => {
    return review.listingId === listing?.listing?.id
  });

  useEffect(() => {
    dispatch(getReviews());
    dispatch(getListings());
  }, [dispatch]);


//   useEffect(() => {
//     const errors = [];

//     if (review.length < 1) errors.push("Please enter a review.");

//     setErrors(errors);
//   }, [review]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const payload = {
//     //   userId: sessionUser.id,
//     listingId: listing.id,
//       review,
//     };

//     const reviews = dispatch(getReviews(payload));
//   };

  return (
    <div className="reviews-container">
      <h1 id="reviews-heading">Cabin reviews</h1>
        {listingReviews.map((review) => (
            <ul key={review.id}>
                <div>{review.user}</div>
                <div>{review.review}</div>
            </ul>
        ))}
    </div>
  );
}

export default Reviews;
