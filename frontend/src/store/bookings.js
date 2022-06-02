import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_BOOKINGS = "cabins/LOAD_BOOKINGS";
export const LOAD_BOOKING = "cabins/LOAD_BOOKING";
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

const loadOne = (booking) => {
  return {
    type: LOAD_BOOKING,
    booking,
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
export const getBookingPage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${id}/book`);

  if (res.ok) {
    const getBookingPage = await res.json();
    dispatch(loadOne(getBookingPage));
  }
};

// ------- REDUCER -------
const bookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      const normalizedBooking = { ...state };
      action.listings.forEach((listing) => {
        normalizedBooking[listing.id] = listing;
      });
      return { ...normalizedBooking };
    case LOAD_BOOKING:
      const newState = { ...state };
      newState[action.booking.id] = action.booking;
      return newState;
    default:
        return state;
  }
};

export default bookingsReducer;
