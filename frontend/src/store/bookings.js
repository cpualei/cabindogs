import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_BOOKINGS = "cabins/LOAD_BOOKINGS";
export const ADD_BOOKING = "cabins/ADD_BOOKING";
export const UPDATE_BOOKING = "cabins/UPDATE_BOOKING";
export const REMOVE_BOOKING = "cabins/REMOVE_BOOKING";

// ACTION CREATORS
const load = (bookings) => {
  return {
    type: LOAD_BOOKINGS,
    bookings,
  };
};

const add = (newBooking) => {
  return {
    type: ADD_BOOKING,
    newBooking,
  };
};

const update = (booking) => {
  return {
    type: UPDATE_BOOKING,
    booking,
  };
};

const remove = (bookingId) => {
  return {
    type: REMOVE_BOOKING,
    bookingId,
  };
};

// ------- THUNK ACTION CREATORS -------
// export const addBooking = (bookingInfo) => async (dispatch) => {
//   const res = await csrfFetch(`/api/listings/${id}/book`);

//   if (res.ok) {
//     const booking = await res.json();
//     dispatch(load(booking));
//   }
// };
