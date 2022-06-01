import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_LISTINGS = "cabins/LOAD_LISTINGS";
export const ADD_LISTING = "cabins/ADD_LISTING";
export const UPDATE_LISTING = "cabins/UPDATE_LISTING";
export const REMOVE_LISTING = "cabins/REMOVE_LISTING";

// ACTION CREATORS
const load = (listings) => {
  return {
    type: LOAD_LISTINGS,
    listings,
  };
};

const add = (newListing) => {
  return {
    type: ADD_LISTING,
    newListing,
  };
};

const update = (listing) => {
  return {
    type: UPDATE_LISTING,
    listing,
  };
};

const remove = (listing) => {
  return {
    type: REMOVE_LISTING,
    listing,
  };
};

// -------- THUNK ACTION CREATORS --------
export const getListings = () => async (dispatch) => {
  const res = await csrfFetch(`/api/listings`);

  if (res.ok) {
    const listings = await res.json();
    dispatch(load(listings));
  }
};

export const getListing = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${id}`);

  if (res.ok) {
    const listing = await res.json();
    dispatch(load(listing));
  }
};

// ADD LISTING THUNK
export const addListing = (listingInfo) => async (dispatch) => {
  const res = await csrfFetch(`/api/newlisting`, {
    method: "post",
    body: JSON.stringify(listingInfo),
  });

  const newListing = await res.json();

  if (newListing) {
    dispatch(add(newListing));
  }

  return newListing;
};

// EDIT LISTING THUNK
export const updateListing = (id, listing) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${id}`, {
    method: "put",
    body: JSON.stringify(listing),
  });

  if (res.ok) {
    const listing = await res.json();
    dispatch(update(listing));
    return listing;
  }
};

// DELETE LISTING THUNK
export const deleteListing = (listing) => async (dispatch) => {
  const res = await fetch(`/api/listings/${listing}`, {
    method: "delete",
  });

  if (res.ok) {
    dispatch(remove(listing));
    return listing;
  }
};

// REDUCER
const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_LISTINGS:
      const normalizedListings = { ...state };
      action.listings.forEach((listing) => {
        normalizedListings[listing.id] = listing;
      });
      return {
        ...normalizedListings,
      };
    case ADD_LISTING:
      const newState = { ...state, [action.newListing.id]: action.newListing };
      return newState;
    case UPDATE_LISTING:
      const updatedState = { ...state, [action.listing.id]: action.listing };
      return updatedState;
    case REMOVE_LISTING:
      const deletedState = { ...state };
      return deletedState;
    default:
      return state;
  }
};

export default listingsReducer;
