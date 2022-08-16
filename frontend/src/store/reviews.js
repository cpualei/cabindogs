import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_REVIEWS = "cabins/LOAD_REVIEWS";
// export const LOAD_REVIEW = "cabins/LOAD_BOOKING";
export const ADD_REVIEW = "cabins/ADD_REVIEW";
// export const UPDATE_REVIEW = "cabins/UPDATE_REVIEW";
// export const REMOVE_REVIEW = "cabins/REMOVE_REVIEW";

// ACTION CREATORS
const load = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
  };
};

// const loadOne = (review) => {
//   return {
//     type: LOAD_BOOKING,
//     review,
//   };
// };

const add = (newReview) => {
  return {
    type: ADD_REVIEW,
    newReview,
  };
};

// const update = (review) => {
//   return {
//     type: UPDATE_REVIEW,
//     review,
//   };
// };

// const remove = (reviewId) => {
//   return {
//     type: REMOVE_REVIEW,
//     reviewId,
//   };
// };

// ------- THUNK ACTION CREATORS -------
export const getReviews = () => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`);

  if (res.ok) {
    const allReviews = await res.json();
    dispatch(load(allReviews));
  }
};

// export const getBookingPage = (id) => async (dispatch) => {
//   const res = await csrfFetch(`/api/listings/${id}/book`);

//   if (res.ok) {
//     const booking = await res.json();
//     dispatch(loadOne(booking));
//   }
// };

export const addReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/new-review`, {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
    });

    const newReview = await res.json();


  if (res.ok) {
    dispatch(add(newReview));
  }

  return newReview;
};

// export const deleteBooking = (booking) => async (dispatch) => {
//   const res = await csrfFetch(`/api/bookings/${booking.id}`, {
//     method: "DELETE",
//   });

//   if (res.ok) {
//     const id = await res.json();
//     dispatch(remove(id));
//     return booking;
//   }
// }

// ------- REDUCER -------
const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      const normalizedReviews = { };
      action.reviews.forEach((review) => {
        normalizedReviews[review.id] = review;
      });
    //   console.log(normalizedReviews)
      return { ...normalizedReviews };
    // case LOAD_BOOKING:
    //   const newState = { ...state };
    //   newState[action.booking.id] = action.booking;
    //   return newState;
    case ADD_REVIEW:
      const addState = { ...state, [action.newReview.id]: action.newReview }
      return addState;
    // case REMOVE_BOOKING:
    //   const deleteState= { ...state }
    //   delete deleteState[action.bookingId]
    //   return deleteState;
    default:
        return state;
  }
};

export default reviewsReducer;
