import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview } from "../../store/reviews";

const CreateReview = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const listing = useSelector((state) => state.listings[id]);

  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);

  
  useEffect(() => {
    const errors = [];

    if (review.length < 1) errors.push("Please enter a review.");

    setErrors(errors);
  }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      listingId: listing.id,
      review,
    };

    const reviews = dispatch(addReview(payload));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          type="textarea"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Enjoy your stay? Write a review here."
        />
        <button type="submit">Submit review</button>
        <button onClick={(e) => setReview("")}>Cancel</button>
      </form>
    </>
  );
};

export default CreateReview;
