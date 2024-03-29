import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_REVIEWS = "cabins/LOAD_REVIEWS";
export const ADD_REVIEW = "cabins/ADD_REVIEW";
export const REMOVE_REVIEW = "cabins/REMOVE_REVIEW";

// ACTION CREATORS
const load = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
  };
};

const add = (newReview) => {
  return {
    type: ADD_REVIEW,
    newReview,
  };
};

const remove = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId,
  };
};

// ------- THUNK ACTION CREATORS -------
export const getReviews = () => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`);

  if (res.ok) {
    const allReviews = await res.json();
    dispatch(load(allReviews));
  }
};

export const addReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/new-review`, {
        method: "POST",
        body: JSON.stringify(review),
    });

    const newReview = await res.json();


  if (res.ok) {
    dispatch(add(newReview));
  }

  return newReview;
};

export const deleteReview = (review) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const id = await res.json();
    dispatch(remove(id));
    return res;
  }
}

// ------- REDUCER -------
const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      const normalizedReviews = { };
      action.reviews.forEach((review) => {
        normalizedReviews[review.id] = review;
      });
      return { ...normalizedReviews };
    case ADD_REVIEW:
      const addState = { ...state, [action.newReview.id]: action.newReview }
      return addState;
    case REMOVE_REVIEW:
      const deleteState= { ...state }
      delete deleteState[action.reviewId]
      return deleteState;
    default:
        return state;
  }
};

export default reviewsReducer;
