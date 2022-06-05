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
export const getBookings = () => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings`);

  if (res.ok) {
    const allbookings = await res.json();
    dispatch(load(allbookings));
  }
};

export const getBookingPage = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${id}/book`);

  if (res.ok) {
    const booking = await res.json();
    dispatch(loadOne(booking));
  }
};

export const addBooking = (bookingInfo) => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings/book`, {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingInfo),
  });

  const newBooking = await res.json();

  if (newBooking) {
    dispatch(add(newBooking));
  }

  return newBooking;
};

export const deleteBooking = (booking) => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings/${booking.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const id = await res.json();
    dispatch(remove(id));
    return booking;
  }
}

// ------- REDUCER -------
const bookingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      const normalizedBookings = { };
      action.bookings.forEach((booking) => {
        normalizedBookings[booking.id] = booking;
      });
      return { ...normalizedBookings };
    case LOAD_BOOKING:
      const newState = { ...state };
      newState[action.booking.id] = action.booking;
      return newState;
    case ADD_BOOKING:
      const addState = { ...state, [action.newBooking.id]: action.newBooking }
      return addState;
    case REMOVE_BOOKING:
      const deleteState= { ...state }
      delete deleteState[action.bookingId]
      return deleteState;
    default:
        return state;
  }
};

export default bookingsReducer;
