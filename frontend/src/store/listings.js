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
  console.log(" ==== HIT ACTION ====");
  return {
    type: ADD_LISTING,
    newListing,
  };
};

const update = (listing) => {
    return {
        type: UPDATE_LISTING,
        listing
    };
};

// const remove = (listingId, userId) => {
//   return {
//     type: REMOVE_LISTING,
//     listingId,
//   };
// };

// -------- THUNK ACTION CREATORS --------
export const getListings = () => async (dispatch) => {
  const res = await csrfFetch(`/api/listings`);

  if (res.ok) {
    const listings = await res.json();
    dispatch(load(listings));
  };
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
  };

  return newListing;
};

// EDIT LISTING THUNK
// export const updateListing = (listingInfo) => async (dispatch) => {
//   const res = await csrfFetch(`/api/listing/${listing.id}`, {
//     method: "post",
//     body: JSON.stringify(listingInfo),
//   });

//   if (res.ok) {
//     const listing = await res.json();
//     dispatch(update(listing));
//     return listing;
//   };
// };

// DELETE LISTING THUNK
// export const deleteListing = (listingId) => async (dispatch) => {
//     const res = await fetch(`/api/listings/${listingId}`, {
//         method: 'delete'
//     });

//     if (res.ok) {
//         const {id: deletedListingId} = await res.json();
//         dispatch(remove(deletedListingId));
//         return deletedListingId;
//     };
// };

// REDUCER
const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_LISTINGS:
      const normalizedListings = {...state};
      action.listings.forEach((listing) => {
        normalizedListings[listing.id] = listing;
      });
      return {
        ...normalizedListings
      };
    case ADD_LISTING:
      const newState = { ...state, [action.newListing.id]: action.newListing };
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
